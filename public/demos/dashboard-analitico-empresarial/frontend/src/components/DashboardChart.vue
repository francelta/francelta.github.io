<template>
  <div class="dashboard-chart">
    <div class="chart-header">
      <h3 class="chart-title">{{ title }}</h3>
      <div class="chart-controls">
        <select v-model="selectedPeriod" @change="updateChart" class="period-selector">
          <option value="7">Últimos 7 días</option>
          <option value="30">Últimos 30 días</option>
          <option value="90">Últimos 90 días</option>
        </select>
        <button @click="exportChart" class="export-btn">
          <span class="icon">📊</span>
          Exportar
        </button>
      </div>
    </div>
    
    <div class="chart-container">
      <canvas ref="chartCanvas"></canvas>
    </div>
    
    <div class="chart-stats" v-if="stats">
      <div class="stat-card">
        <div class="stat-label">Total</div>
        <div class="stat-value">{{ formatCurrency(stats.total) }}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Promedio</div>
        <div class="stat-value">{{ formatCurrency(stats.average) }}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Crecimiento</div>
        <div class="stat-value" :class="stats.growth >= 0 ? 'positive' : 'negative'">
          {{ stats.growth >= 0 ? '+' : '' }}{{ stats.growth }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import axios from 'axios';

// Registrar todos los componentes de Chart.js
Chart.register(...registerables);

export default {
  name: 'DashboardChart',
  
  props: {
    title: {
      type: String,
      required: true,
      default: 'Métricas de Ventas'
    },
    chartType: {
      type: String,
      default: 'line',
      validator: (value) => ['line', 'bar', 'pie', 'doughnut'].includes(value)
    },
    apiEndpoint: {
      type: String,
      required: true,
      default: '/api/dashboard/ventas/'
    },
    dataKey: {
      type: String,
      default: 'ventas_por_dia'
    }
  },
  
  data() {
    return {
      chart: null,
      selectedPeriod: '30',
      chartData: null,
      stats: null,
      loading: false,
      error: null
    };
  },
  
  mounted() {
    this.fetchData();
  },
  
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
  
  methods: {
    /**
     * Obtiene datos de la API REST de Django
     */
    async fetchData() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await axios.get(this.apiEndpoint, {
          params: {
            period: this.selectedPeriod
          }
        });
        
        this.chartData = response.data[this.dataKey];
        this.stats = response.data.stats;
        
        this.renderChart();
      } catch (err) {
        console.error('Error fetching chart data:', err);
        this.error = 'Error al cargar los datos del gráfico';
        
        // Usar datos de ejemplo en caso de error (para demo)
        this.useMockData();
      } finally {
        this.loading = false;
      }
    },
    
    /**
     * Renderiza el gráfico usando Chart.js
     */
    renderChart() {
      if (!this.chartData) return;
      
      const ctx = this.$refs.chartCanvas.getContext('2d');
      
      // Destruir gráfico anterior si existe
      if (this.chart) {
        this.chart.destroy();
      }
      
      // Preparar datos para Chart.js
      const labels = this.chartData.map(item => item.fecha || item.label);
      const data = this.chartData.map(item => item.total_ventas || item.value);
      
      // Configuración del gráfico
      const config = {
        type: this.chartType,
        data: {
          labels: labels,
          datasets: [{
            label: 'Ventas (€)',
            data: data,
            backgroundColor: this.chartType === 'line' 
              ? 'rgba(59, 130, 246, 0.2)'
              : this.generateColors(data.length),
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 2,
            tension: 0.4, // Suavizado de líneas
            fill: this.chartType === 'line'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: this.chartType !== 'line',
              position: 'bottom'
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              callbacks: {
                label: (context) => {
                  return `Ventas: ${this.formatCurrency(context.parsed.y || context.parsed)}`;
                }
              }
            }
          },
          scales: this.chartType === 'line' || this.chartType === 'bar' ? {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => this.formatCurrency(value)
              }
            }
          } : {}
        }
      };
      
      // Crear el gráfico
      this.chart = new Chart(ctx, config);
    },
    
    /**
     * Actualiza el gráfico cuando cambia el período
     */
    updateChart() {
      this.fetchData();
    },
    
    /**
     * Exporta el gráfico como imagen
     */
    exportChart() {
      if (!this.chart) return;
      
      const url = this.chart.toBase64Image();
      const link = document.createElement('a');
      link.download = `${this.title.replace(/\s+/g, '_')}_${Date.now()}.png`;
      link.href = url;
      link.click();
    },
    
    /**
     * Formatea números como moneda
     */
    formatCurrency(value) {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
      }).format(value);
    },
    
    /**
     * Genera colores para gráficos de torta/dona
     */
    generateColors(count) {
      const colors = [
        'rgba(59, 130, 246, 0.7)',   // Blue
        'rgba(34, 197, 94, 0.7)',    // Green
        'rgba(234, 179, 8, 0.7)',    // Yellow
        'rgba(239, 68, 68, 0.7)',    // Red
        'rgba(139, 92, 246, 0.7)',   // Purple
        'rgba(236, 72, 153, 0.7)',   // Pink
      ];
      
      return colors.slice(0, count);
    },
    
    /**
     * Usa datos de ejemplo para demostración
     */
    useMockData() {
      const days = parseInt(this.selectedPeriod);
      const mockData = [];
      
      for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        mockData.push({
          fecha: date.toISOString().split('T')[0],
          total_ventas: Math.random() * 10000 + 5000,
          count_ventas: Math.floor(Math.random() * 50) + 10
        });
      }
      
      this.chartData = mockData;
      
      // Calcular stats de ejemplo
      const total = mockData.reduce((sum, item) => sum + item.total_ventas, 0);
      this.stats = {
        total: total,
        average: total / mockData.length,
        growth: (Math.random() * 40 - 10).toFixed(1)
      };
      
      this.renderChart();
    }
  }
};
</script>

<style scoped>
.dashboard-chart {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.chart-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.chart-controls {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.period-selector {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  font-size: 0.875rem;
  cursor: pointer;
  transition: border-color 0.2s;
}

.period-selector:hover {
  border-color: #3b82f6;
}

.period-selector:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.export-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.export-btn:hover {
  background: #2563eb;
}

.icon {
  font-size: 1rem;
}

.chart-container {
  position: relative;
  height: 400px;
  margin-bottom: 1.5rem;
}

.chart-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.stat-card {
  text-align: center;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.stat-value.positive {
  color: #22c55e;
}

.stat-value.negative {
  color: #ef4444;
}

@media (max-width: 768px) {
  .chart-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .chart-stats {
    grid-template-columns: 1fr;
  }
  
  .chart-container {
    height: 300px;
  }
}
</style>

