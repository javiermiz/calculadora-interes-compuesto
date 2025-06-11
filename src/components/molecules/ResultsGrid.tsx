import { ResultCard } from '../atoms/ResultCard'

interface ResultsGridProps {
  invested: number
  total: number
  profit: number
}

export function ResultsGrid({ invested, total, profit }: ResultsGridProps) {
  const formatPercentage = (value: number) => {
    const percentage = ((value - invested) / invested) * 100
    return new Intl.NumberFormat('es-MX', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(percentage / 100)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <ResultCard
        label="Total Invertido"
        value={invested}
        tooltip="La suma total de tu inversión inicial más todas las aportaciones mensuales realizadas."
      />
      <ResultCard
        label="Total Acumulado"
        value={total}
        color="text-oklch(0.3 0.2 240)"
        tooltip="El valor total de tu inversión incluyendo el capital invertido más los intereses generados."
        formatValue={(value) => (
          <>
            {new Intl.NumberFormat('es-MX', {
              style: 'currency',
              currency: 'MXN',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format(value)}
            <span className="block text-sm text-oklch(0.5 0 0) mt-1">
              {formatPercentage(value)}
            </span>
          </>
        )}
      />
      <ResultCard
        label="Ganancia Total"
        value={profit}
        color="text-oklch(0.4 0.2 120)"
        tooltip="La diferencia entre el total acumulado y el total invertido, representando tus ganancias netas."
        formatValue={(value) => (
          <>
            {new Intl.NumberFormat('es-MX', {
              style: 'currency',
              currency: 'MXN',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format(value)}
            <span className="block text-sm text-oklch(0.5 0 0) mt-1">
              {formatPercentage(value + invested)}
            </span>
          </>
        )}
      />
    </div>
  )
} 