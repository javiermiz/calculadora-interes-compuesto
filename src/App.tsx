import { useState, useEffect } from 'react'
import { CalculatorTemplate } from './components/templates/CalculatorTemplate'

function App() {
  const [initialAmount, setInitialAmount] = useState<number>(1000)
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100)
  const [annualReturn, setAnnualReturn] = useState<number>(8)
  const [years, setYears] = useState<number>(10)
  const [results, setResults] = useState<{ year: number; invested: number; total: number }[]>([])

  const calculateCompoundInterest = () => {
    let total = initialAmount
    let invested = initialAmount
    const monthlyRate = (annualReturn / 100) / 12
    const newResults = []

    for (let year = 1; year <= years; year++) {
      for (let month = 1; month <= 12; month++) {
        total = (total + monthlyContribution) * (1 + monthlyRate)
        invested += monthlyContribution
      }
      newResults.push({
        year,
        invested: Math.round(invested),
        total: Math.round(total)
      })
    }

    setResults(newResults)
  }

  useEffect(() => {
    calculateCompoundInterest()
  }, [initialAmount, monthlyContribution, annualReturn, years])

  return (
    <CalculatorTemplate
      initialAmount={initialAmount}
      monthlyContribution={monthlyContribution}
      annualReturn={annualReturn}
      years={years}
      results={results}
      onInitialAmountChange={setInitialAmount}
      onMonthlyContributionChange={setMonthlyContribution}
      onAnnualReturnChange={setAnnualReturn}
      onYearsChange={setYears}
    />
  )
}

export default App
