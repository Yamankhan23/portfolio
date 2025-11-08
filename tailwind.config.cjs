/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#007AFF',
                accent: '#3A86FF',
                secondaryAccent: '#FF6B6B',
                lightBg: '#FFFFFF',
                lightSurface: '#F9F9FB',
                lightText: '#1C1C1C',
                lightSecondaryText: '#8E8E93',
                darkBg: '#121212',
                darkSurface: '#1F1F1F',
                darkText: '#F2F2F7',
                darkSecondaryText: '#98989E',
                borderLight: '#E5E5EA',
                borderDark: '#2C2C2E'
            },
            boxShadow: {
                light: '0 6px 20px rgba(2,6,23,0.06)',
                subtle: '0 2px 8px rgba(2,6,23,0.04)'
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui']
            }
        }
    },
    plugins: []
}