"""
Serializers for Analytics Dashboard - Django REST Framework
============================================================

Este módulo define los serializers que convierten los modelos Django
a formato JSON para la API REST.

Los serializers incluyen validaciones y campos calculados para el frontend.
"""

from rest_framework import serializers
from .models import Empresa, MetricaDigitalizacion, Venta, ObjetivoEstrategico
from django.db.models import Sum, Avg, Count
from datetime import timedelta
from django.utils import timezone


class EmpresaSerializer(serializers.ModelSerializer):
    """
    Serializer para el modelo Empresa
    
    Incluye estadísticas agregadas de ventas y digitalización.
    """
    
    total_ventas = serializers.SerializerMethodField()
    metricas_count = serializers.SerializerMethodField()
    digitalizacion_promedio = serializers.SerializerMethodField()
    
    class Meta:
        model = Empresa
        fields = [
            'id',
            'nombre',
            'sector',
            'fecha_registro',
            'activo',
            'total_ventas',
            'metricas_count',
            'digitalizacion_promedio',
        ]
        read_only_fields = ['fecha_registro']
    
    def get_total_ventas(self, obj):
        """Calcula el total de ventas de la empresa en el último mes"""
        fecha_inicio = timezone.now() - timedelta(days=30)
        total = obj.ventas.filter(
            fecha_venta__gte=fecha_inicio
        ).aggregate(total=Sum('monto'))['total']
        return float(total) if total else 0.0
    
    def get_metricas_count(self, obj):
        """Cuenta el número de métricas de digitalización registradas"""
        return obj.metricas_digitalizacion.count()
    
    def get_digitalizacion_promedio(self, obj):
        """Calcula el promedio de adopción digital"""
        promedio = obj.metricas_digitalizacion.aggregate(
            avg=Avg('porcentaje_adopcion')
        )['avg']
        return float(promedio) if promedio else 0.0


class MetricaDigitalizacionSerializer(serializers.ModelSerializer):
    """
    Serializer para métricas de digitalización
    
    Incluye información de la empresa relacionada.
    """
    
    empresa_nombre = serializers.CharField(source='empresa.nombre', read_only=True)
    categoria_display = serializers.CharField(source='get_categoria_display', read_only=True)
    
    class Meta:
        model = MetricaDigitalizacion
        fields = [
            'id',
            'empresa',
            'empresa_nombre',
            'categoria',
            'categoria_display',
            'porcentaje_adopcion',
            'fecha_medicion',
            'roi_estimado',
            'notas',
        ]
    
    def validate_porcentaje_adopcion(self, value):
        """Valida que el porcentaje esté entre 0 y 100"""
        if value < 0 or value > 100:
            raise serializers.ValidationError(
                "El porcentaje de adopción debe estar entre 0 y 100"
            )
        return value


class VentaSerializer(serializers.ModelSerializer):
    """
    Serializer para el modelo Venta
    
    Incluye campos calculados como margen bruto y datos de la empresa.
    """
    
    empresa_nombre = serializers.CharField(source='empresa.nombre', read_only=True)
    canal_display = serializers.CharField(source='get_canal_display', read_only=True)
    margen_bruto = serializers.ReadOnlyField()
    
    class Meta:
        model = Venta
        fields = [
            'id',
            'empresa',
            'empresa_nombre',
            'fecha_venta',
            'canal',
            'canal_display',
            'monto',
            'producto',
            'cantidad',
            'cliente_nuevo',
            'region',
            'costo_adquisicion',
            'margen_bruto',
        ]
    
    def validate_monto(self, value):
        """Valida que el monto sea positivo"""
        if value <= 0:
            raise serializers.ValidationError("El monto debe ser mayor a 0")
        return value
    
    def validate(self, data):
        """Validación a nivel de objeto"""
        if data.get('costo_adquisicion') and data.get('monto'):
            if data['costo_adquisicion'] > data['monto']:
                raise serializers.ValidationError({
                    'costo_adquisicion': 'El costo de adquisición no puede ser mayor al monto de venta'
                })
        return data


class ObjetivoEstrategicoSerializer(serializers.ModelSerializer):
    """
    Serializer para objetivos estratégicos
    
    Incluye campos calculados de progreso y tiempo restante.
    """
    
    empresa_nombre = serializers.CharField(source='empresa.nombre', read_only=True)
    tipo_display = serializers.CharField(source='get_tipo_display', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    porcentaje_completitud = serializers.ReadOnlyField()
    dias_restantes = serializers.ReadOnlyField()
    
    class Meta:
        model = ObjetivoEstrategico
        fields = [
            'id',
            'empresa',
            'empresa_nombre',
            'titulo',
            'descripcion',
            'tipo',
            'tipo_display',
            'valor_objetivo',
            'valor_actual',
            'porcentaje_completitud',
            'fecha_inicio',
            'fecha_objetivo',
            'dias_restantes',
            'status',
            'status_display',
        ]
    
    def validate(self, data):
        """Validación de fechas"""
        if data.get('fecha_inicio') and data.get('fecha_objetivo'):
            if data['fecha_objetivo'] <= data['fecha_inicio']:
                raise serializers.ValidationError({
                    'fecha_objetivo': 'La fecha objetivo debe ser posterior a la fecha de inicio'
                })
        return data


class DashboardStatsSerializer(serializers.Serializer):
    """
    Serializer para estadísticas generales del dashboard
    
    No está vinculado a un modelo específico, agrega datos de múltiples fuentes.
    """
    
    total_empresas = serializers.IntegerField()
    total_ventas_mes = serializers.DecimalField(max_digits=12, decimal_places=2)
    ventas_count_mes = serializers.IntegerField()
    digitalizacion_promedio_global = serializers.DecimalField(max_digits=5, decimal_places=2)
    objetivos_completados = serializers.IntegerField()
    objetivos_totales = serializers.IntegerField()
    
    # Datos para gráficos
    ventas_por_dia = serializers.ListField(child=serializers.DictField())
    digitalizacion_por_categoria = serializers.ListField(child=serializers.DictField())
    top_empresas = serializers.ListField(child=serializers.DictField())


class VentasPorCanalSerializer(serializers.Serializer):
    """
    Serializer para análisis de ventas por canal
    """
    
    canal = serializers.CharField()
    canal_display = serializers.CharField()
    total_ventas = serializers.DecimalField(max_digits=12, decimal_places=2)
    count_ventas = serializers.IntegerField()
    ticket_promedio = serializers.DecimalField(max_digits=10, decimal_places=2)


class TendenciaVentasSerializer(serializers.Serializer):
    """
    Serializer para tendencias de ventas en el tiempo
    """
    
    fecha = serializers.DateField()
    total_ventas = serializers.DecimalField(max_digits=12, decimal_places=2)
    count_ventas = serializers.IntegerField()
    clientes_nuevos = serializers.IntegerField()

