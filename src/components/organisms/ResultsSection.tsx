import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import type {
  ChartData,
  ChartOptions,
} from 'chart.js'
import { ResultsGrid } from '../molecules/ResultsGrid'
import { useEffect, useRef } from 'react'

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface Result {
  year: number
  invested: number
  total: number
}

interface ResultsSectionProps {
  results?: Result[]
}

const DEFAULT_RESULT: Result = {
  year: 0,
  invested: 0,
  total: 0
}

export function ResultsSection({ results = [] }: ResultsSectionProps) {
  const chartRef = useRef<ChartJS<'bar'>>(null)

  // Limpiar el gráfico cuando el componente se desmonte
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

  const safeResults = Array.isArray(results) && results.length > 0 ? results : [DEFAULT_RESULT]
  const lastResult = safeResults[safeResults.length - 1]
  const profit = lastResult.total - lastResult.invested

  const chartData: ChartData<'bar'> = {
    labels: safeResults.map(r => `Año ${r.year}`),
    datasets: [
      {
        label: 'Total Invertido',
        data: safeResults.map(r => r.invested),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
      {
        label: 'Total Acumulado',
        data: safeResults.map(r => r.total),
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 1,
      },
    ]
  }

  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number
            return `${context.dataset.label}: ${value.toLocaleString('es-ES', {
              style: 'currency',
              currency: 'EUR',
            })}`
          },
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
        padding: 12,
      },
    },
    scales: {
      x: {
        type: 'category' as const,
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear' as const,
        beginAtZero: true,
        ticks: {
          callback: function(tickValue) {
            const value = Number(tickValue)
            return value.toLocaleString('es-ES', {
              style: 'currency',
              currency: 'EUR',
              maximumFractionDigits: 0,
            })
          },
        },
      },
    }
  }

  if (!Array.isArray(results) || results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Resultados</h2>
        <div className="text-center text-gray-500 py-8">
          Ingresa valores para ver los resultados
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Resultados</h2>
      <ResultsGrid
        invested={lastResult.invested}
        total={lastResult.total}
        profit={profit}
      />
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Proyección de Inversión</h3>
        <div className="h-[300px] sm:h-[400px]">
          <Bar
            ref={chartRef}
            data={chartData}
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  )
} 