/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using the new P3 color palette
        primary: 'oklch(var(--color-primary))',
        secondary: 'oklch(var(--color-secondary))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  // Container queries are now built-in
  containerQueries: true,
  // Using the new high-performance engine
  engine: 'v4',
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}

