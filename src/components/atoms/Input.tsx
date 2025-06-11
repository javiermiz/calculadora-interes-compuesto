import type { InputHTMLAttributes } from 'react'
import { useState, useRef, useEffect } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  prefix?: string
  suffix?: string
  error?: string
  helperText?: string
}

export function Input({ 
  label, 
  prefix, 
  suffix, 
  error, 
  helperText,
  className = '', 
  onFocus,
  onBlur,
  ...props 
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const id = `input-${Math.random().toString(36).substr(2, 9)}`

  // Auto-focus the input when clicking the label
  const handleLabelClick = () => {
    inputRef.current?.focus()
  }

  // Handle focus with animation
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  // Handle blur with animation
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && document.activeElement === inputRef.current) {
        inputRef.current?.blur()
      }
    }

    const input = inputRef.current
    input?.addEventListener('keydown', handleKeyDown)
    return () => input?.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="group">
      <label 
        htmlFor={id}
        onClick={handleLabelClick}
        className="block text-sm font-medium text-oklch(0.4 0 0) mb-2 cursor-text select-none"
      >
        {label}
      </label>
      <div 
        className={`
          relative transition-all duration-200
          ${isFocused ? 'scale-[1.02]' : 'scale-100'}
          ${error ? 'ring-2 ring-red-500/20' : ''}
        `}
      >
        {prefix && (
          <span 
            className={`
              absolute left-3 top-1/2 -translate-y-1/2 text-oklch(0.5 0 0)
              transition-colors duration-200
              ${isFocused ? 'text-oklch(0.6 0.2 240)' : ''}
            `}
          >
            {prefix}
          </span>
        )}
        <input
          ref={inputRef}
          id={id}
          className={`
            w-full 
            ${prefix ? 'pl-8' : 'pl-4'} 
            ${suffix ? 'pr-8' : 'pr-4'} 
            py-3 
            rounded-lg 
            border 
            transition-all 
            duration-200
            ${error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
              : 'border-oklch(0.9 0 0 / 0.2) focus:border-oklch(0.6 0.2 240) focus:ring-2 focus:ring-oklch(0.6 0.2 240 / 0.2)'
            }
            ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${className}
          `}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error || helperText ? `${id}-description` : undefined}
          {...props}
        />
        {suffix && (
          <span 
            className={`
              absolute right-3 top-1/2 -translate-y-1/2 text-oklch(0.5 0 0)
              transition-colors duration-200
              ${isFocused ? 'text-oklch(0.6 0.2 240)' : ''}
            `}
          >
            {suffix}
          </span>
        )}
      </div>
      {(error || helperText) && (
        <p 
          id={`${id}-description`}
          className={`
            mt-1 text-sm
            ${error ? 'text-red-500' : 'text-oklch(0.5 0 0)'}
          `}
        >
          {error || helperText}
        </p>
      )}
    </div>
  )
} 