/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#0099ff",
                "accent-cyan": "#00f2fe",
                "background-light": "#f6f9fc",
                "background-dark": "#0a1118",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px",
            },
        },
    },
    plugins: [],
};
