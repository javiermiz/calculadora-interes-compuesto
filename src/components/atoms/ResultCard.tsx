import { useState, type ReactNode } from 'react'

interface ResultCardProps {
  label: string
  value: number
  color?: string
  tooltip?: string
  formatValue?: (value: number) => string | ReactNode
}

export function ResultCard({ 
  label, 
  value, 
  color = 'text-oklch(0.2 0 0)',
  tooltip,
  formatValue = (value) => new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)
}: ResultCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const formattedValue = formatValue(value)
  const displayValue = typeof formattedValue === 'string' ? formattedValue : value.toLocaleString()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayValue)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div 
      className={`
        relative p-4 rounded-lg bg-white shadow-sm
        transition-all duration-200
        ${isHovered ? 'shadow-md scale-[1.02]' : ''}
        ${tooltip ? 'cursor-help' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="group"
      aria-label={`${label}: ${displayValue}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 
            className="text-sm font-medium text-oklch(0.4 0 0)"
            title={tooltip}
          >
            {label}
          </h3>
          <p 
            className={`mt-1 text-2xl font-semibold ${color}`}
            onClick={handleCopy}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
            aria-label={`Copiar valor: ${displayValue}`}
            title="Haz clic para copiar"
          >
            {formattedValue}
            {isCopied && (
              <span 
                className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-oklch(0.3 0.2 240) rounded"
                role="status"
              >
                ¡Copiado!
              </span>
            )}
          </p>
        </div>
        {tooltip && (
          <button
            className="p-1 text-oklch(0.5 0 0) hover:text-oklch(0.3 0 0) transition-colors"
            onClick={() => alert(tooltip)}
            aria-label={`Más información sobre ${label}`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="w-4 h-4"
            >
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-1.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 8.5zM10 7a1 1 0 100-2 1 1 0 000 2z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
} 