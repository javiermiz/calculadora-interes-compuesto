import { Input } from '../atoms/Input'

interface InputConfig {
  label: string
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  prefix?: string
  suffix?: string
  helperText?: string
}

interface InputGroupProps {
  inputs: InputConfig[]
  title?: string
  description?: string
}

export function InputGroup({ inputs, title, description }: InputGroupProps) {
  return (
    <div className="space-y-4">
      {title && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-oklch(0.2 0 0)">{title}</h2>
          {description && (
            <p className="text-sm text-oklch(0.5 0 0) mt-1">{description}</p>
          )}
        </div>
      )}
      <div className="space-y-4">
        {inputs.map((input, index) => (
          <Input
            key={index}
            label={input.label}
            value={input.value}
            onChange={input.onChange}
            prefix={input.prefix}
            suffix={input.suffix}
            helperText={input.helperText}
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
          />
        ))}
      </div>
    </div>
  )
} 