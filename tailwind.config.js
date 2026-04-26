/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1A73E8', // Google Blue
        secondary: '#5F6368', // Google Gray text
        surface: '#FFFFFF',
        background: '#F8F9FA', // Light Gray background
        dark: {
          surface: '#202124',
          background: '#121212',
          primary: '#8AB4F8',
          text: '#E8EAED',
        }
      },
      boxShadow: {
        'google': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        'google-hover': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
      }
    },
  },
  plugins: [],
}
