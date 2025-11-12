"""
Models for Analytics Dashboard - Django Backend
================================================

Este módulo define los modelos de datos para el dashboard analítico empresarial.
Los modelos representan métricas de ventas y estrategias de digitalización.

Cumple con estándares de Django y best practices.
"""

from django.db import models
from django.core.validators import MinValueValidator
from django.utils import timezone


class Empresa(models.Model):
    """
    Modelo que representa una empresa cliente
    """
    nombre = models.CharField(max_length=200, unique=True, verbose_name="Nombre de la Empresa")
    sector = models.CharField(max_length=100, verbose_name="Sector Industrial")
    fecha_registro = models.DateTimeField(default=timezone.now, verbose_name="Fecha de Registro")
    activo = models.BooleanField(default=True, verbose_name="Estado Activo")
    
    class Meta:
        verbose_name = "Empresa"
        verbose_name_plural = "Empresas"
        ordering = ['-fecha_registro']
    
    def __str__(self):
        return self.nombre


class MetricaDigitalizacion(models.Model):
    """
    Modelo para métricas de digitalización empresarial
    
    Rastrea el progreso de transformación digital de cada empresa,
    incluyendo adopción de herramientas, procesos automatizados y ROI.
    """
    
    CATEGORIA_CHOICES = [
        ('AUTOMATIZACION', 'Automatización de Procesos'),
        ('VENTAS_ONLINE', 'Ventas Online'),
        ('MARKETING_DIGITAL', 'Marketing Digital'),
        ('ANALYTICS', 'Analytics y BI'),
        ('CLOUD', 'Cloud Computing'),
        ('IA_ML', 'IA y Machine Learning'),
    ]
    
    empresa = models.ForeignKey(
        Empresa,
        on_delete=models.CASCADE,
        related_name='metricas_digitalizacion',
        verbose_name="Empresa"
    )
    categoria = models.CharField(
        max_length=50,
        choices=CATEGORIA_CHOICES,
        verbose_name="Categoría de Digitalización"
    )
    porcentaje_adopcion = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        validators=[MinValueValidator(0)],
        verbose_name="Porcentaje de Adopción",
        help_text="0-100%"
    )
    fecha_medicion = models.DateField(default=timezone.now, verbose_name="Fecha de Medición")
    roi_estimado = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        null=True,
        blank=True,
        verbose_name="ROI Estimado (€)",
        help_text="Retorno de inversión estimado en euros"
    )
    notas = models.TextField(blank=True, verbose_name="Notas Adicionales")
    
    class Meta:
        verbose_name = "Métrica de Digitalización"
        verbose_name_plural = "Métricas de Digitalización"
        ordering = ['-fecha_medicion', 'empresa']
        indexes = [
            models.Index(fields=['empresa', 'categoria']),
            models.Index(fields=['fecha_medicion']),
        ]
    
    def __str__(self):
        return f"{self.empresa.nombre} - {self.get_categoria_display()} ({self.fecha_medicion})"


class Venta(models.Model):
    """
    Modelo para registro de ventas
    
    Almacena información detallada de cada transacción de venta,
    permitiendo análisis de tendencias y forecasting.
    """
    
    CANAL_CHOICES = [
        ('ONLINE', 'Venta Online'),
        ('TIENDA', 'Tienda Física'),
        ('TELEFONO', 'Venta Telefónica'),
        ('B2B', 'Business to Business'),
    ]
    
    empresa = models.ForeignKey(
        Empresa,
        on_delete=models.CASCADE,
        related_name='ventas',
        verbose_name="Empresa"
    )
    fecha_venta = models.DateTimeField(default=timezone.now, verbose_name="Fecha de Venta")
    canal = models.CharField(
        max_length=20,
        choices=CANAL_CHOICES,
        verbose_name="Canal de Venta"
    )
    monto = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)],
        verbose_name="Monto de Venta (€)"
    )
    producto = models.CharField(max_length=200, verbose_name="Producto/Servicio")
    cantidad = models.PositiveIntegerField(default=1, verbose_name="Cantidad")
    cliente_nuevo = models.BooleanField(default=False, verbose_name="¿Cliente Nuevo?")
    region = models.CharField(max_length=100, blank=True, verbose_name="Región Geográfica")
    
    # Campos calculados
    costo_adquisicion = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
        verbose_name="Costo de Adquisición (€)",
        help_text="Costo de marketing/ventas para adquirir esta venta"
    )
    
    class Meta:
        verbose_name = "Venta"
        verbose_name_plural = "Ventas"
        ordering = ['-fecha_venta']
        indexes = [
            models.Index(fields=['empresa', 'fecha_venta']),
            models.Index(fields=['canal']),
            models.Index(fields=['fecha_venta']),
        ]
    
    def __str__(self):
        return f"{self.empresa.nombre} - {self.producto} (€{self.monto})"
    
    @property
    def margen_bruto(self):
        """Calcula el margen bruto si hay costo de adquisición"""
        if self.costo_adquisicion:
            return self.monto - self.costo_adquisicion
        return None


class ObjetivoEstrategico(models.Model):
    """
    Modelo para objetivos estratégicos de digitalización
    
    Define metas a alcanzar en el proceso de transformación digital
    y permite trackear el progreso hacia esos objetivos.
    """
    
    TIPO_CHOICES = [
        ('REVENUE', 'Aumento de Ingresos'),
        ('EFFICIENCY', 'Eficiencia Operativa'),
        ('CUSTOMER', 'Satisfacción del Cliente'),
        ('MARKET', 'Expansión de Mercado'),
        ('INNOVATION', 'Innovación'),
    ]
    
    STATUS_CHOICES = [
        ('PENDIENTE', 'Pendiente'),
        ('EN_PROGRESO', 'En Progreso'),
        ('COMPLETADO', 'Completado'),
        ('CANCELADO', 'Cancelado'),
    ]
    
    empresa = models.ForeignKey(
        Empresa,
        on_delete=models.CASCADE,
        related_name='objetivos',
        verbose_name="Empresa"
    )
    titulo = models.CharField(max_length=200, verbose_name="Título del Objetivo")
    descripcion = models.TextField(verbose_name="Descripción Detallada")
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES, verbose_name="Tipo de Objetivo")
    valor_objetivo = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        verbose_name="Valor Objetivo",
        help_text="Valor numérico del objetivo (%, €, unidades)"
    )
    valor_actual = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0,
        verbose_name="Valor Actual"
    )
    fecha_inicio = models.DateField(verbose_name="Fecha de Inicio")
    fecha_objetivo = models.DateField(verbose_name="Fecha Objetivo de Completitud")
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='PENDIENTE',
        verbose_name="Estado"
    )
    
    class Meta:
        verbose_name = "Objetivo Estratégico"
        verbose_name_plural = "Objetivos Estratégicos"
        ordering = ['fecha_objetivo', 'empresa']
    
    def __str__(self):
        return f"{self.empresa.nombre} - {self.titulo}"
    
    @property
    def porcentaje_completitud(self):
        """Calcula el porcentaje de completitud del objetivo"""
        if self.valor_objetivo > 0:
            return min((self.valor_actual / self.valor_objetivo) * 100, 100)
        return 0
    
    @property
    def dias_restantes(self):
        """Calcula los días restantes hasta la fecha objetivo"""
        delta = self.fecha_objetivo - timezone.now().date()
        return delta.days

