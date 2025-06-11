import { CalculatorForm } from '../organisms/CalculatorForm'
import { ResultsSection } from '../organisms/ResultsSection'

interface CalculatorTemplateProps {
  initialAmount: number
  monthlyContribution: number
  annualReturn: number
  years: number
  results: Array<{
    year: number
    invested: number
    total: number
  }>
  onInitialAmountChange: (value: number) => void
  onMonthlyContributionChange: (value: number) => void
  onAnnualReturnChange: (value: number) => void
  onYearsChange: (value: number) => void
}

export function CalculatorTemplate({
  initialAmount,
  monthlyContribution,
  annualReturn,
  years,
  results,
  onInitialAmountChange,
  onMonthlyContributionChange,
  onAnnualReturnChange,
  onYearsChange,
}: CalculatorTemplateProps) {
  return (
    <div className="min-h-screen bg-oklch(0.98 0 0)">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-oklch(0.2 0 0) mb-4">
            Calculadora de Interés Compuesto
          </h1>
          <p className="text-sm sm:text-base text-oklch(0.5 0 0) max-w-2xl mx-auto">
            Calcula el crecimiento de tu inversión a lo largo del tiempo, considerando 
            el interés compuesto y las aportaciones mensuales.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <CalculatorForm
              initialAmount={initialAmount}
              monthlyContribution={monthlyContribution}
              annualReturn={annualReturn}
              years={years}
              onInitialAmountChange={onInitialAmountChange}
              onMonthlyContributionChange={onMonthlyContributionChange}
              onAnnualReturnChange={onAnnualReturnChange}
              onYearsChange={onYearsChange}
            />
          </div>

          <div className="lg:col-span-7">
            <ResultsSection results={results} />
          </div>
        </main>

        <footer className="mt-12 text-center text-sm text-oklch(0.5 0 0)">
          <p>
            Esta calculadora es una herramienta de estimación. Los resultados son aproximados y 
            no garantizan el rendimiento futuro de tu inversión.
          </p>
        </footer>
      </div>
    </div>
  )
} 