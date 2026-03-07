/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'ks-black': '#0a0a0a',
                'ks-dark': '#111111',
                'ks-surface': '#1a1a1a',
                'ks-surface2': '#242424',
                'ks-surface3': '#2e2e2e',
                'ks-border': '#333333',
                'ks-border2': '#444444',
                'ks-text': '#f0f0f0',
                'ks-muted': '#888888',
                'ks-orange': '#FF5A09',
                'ks-orange2': '#FF7A3A',
            },
            fontFamily: {
                display: ['Bebas Neue', 'Oswald', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'bento': '1.25rem',
                'bento-lg': '1.75rem',
            },
        },
    },
    plugins: [],
}
