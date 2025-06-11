import { InputGroup } from '../molecules/InputGroup'

interface CalculatorFormProps {
  initialAmount: number
  monthlyContribution: number
  annualReturn: number
  years: number
  onInitialAmountChange: (value: number) => void
  onMonthlyContributionChange: (value: number) => void
  onAnnualReturnChange: (value: number) => void
  onYearsChange: (value: number) => void
}

export function CalculatorForm({
  initialAmount,
  monthlyContribution,
  annualReturn,
  years,
  onInitialAmountChange,
  onMonthlyContributionChange,
  onAnnualReturnChange,
  onYearsChange,
}: CalculatorFormProps) {
  const validateAndUpdate = (
    value: string,
    min: number,
    max: number,
    onChange: (value: number) => void
  ) => {
    const numValue = Number(value.replace(/[^0-9.]/g, ''))
    if (!isNaN(numValue) && numValue >= min && numValue <= max) {
      onChange(numValue)
    }
  }

  const leftInputs = [
    {
      label: 'Inversión Inicial',
      value: initialAmount,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => 
        validateAndUpdate(e.target.value, 0, 1000000000, onInitialAmountChange),
      prefix: '$',
      helperText: 'Monto inicial que invertirás'
    },
    {
      label: 'Aportación Mensual',
      value: monthlyContribution,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => 
        validateAndUpdate(e.target.value, 0, 1000000, onMonthlyContributionChange),
      prefix: '$',
      helperText: 'Cantidad que aportarás cada mes'
    }
  ]

  const rightInputs = [
    {
      label: 'Rendimiento Anual Esperado',
      value: annualReturn,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => 
        validateAndUpdate(e.target.value, 0, 100, onAnnualReturnChange),
      suffix: '%',
      helperText: 'Porcentaje de rendimiento anual esperado'
    },
    {
      label: 'Plazo de Inversión',
      value: years,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => 
        validateAndUpdate(e.target.value, 1, 50, onYearsChange),
      suffix: 'años',
      helperText: 'Número de años que mantendrás la inversión'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputGroup 
          inputs={leftInputs}
          title="Inversión"
          description="Define el capital inicial y las aportaciones mensuales que realizarás."
        />
        <InputGroup 
          inputs={rightInputs}
          title="Rendimiento"
          description="Establece el rendimiento esperado y el plazo de tu inversión."
        />
      </div>
      <div className="bg-oklch(0.98 0 0) rounded-lg p-4 text-sm text-oklch(0.5 0 0)">
        <p className="font-medium mb-1">💡 Consejo:</p>
        <p>
          Para obtener resultados más precisos, considera factores como la inflación y los impuestos. 
          Este cálculo es una estimación basada en un rendimiento constante.
        </p>
      </div>
    </div>
  )
} 