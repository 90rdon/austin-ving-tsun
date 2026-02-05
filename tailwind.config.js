/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "heritage-green": "#2C4C3B",
                "heritage-light": "#F5F2EA",
                "heritage-ochre": "#D69E59",
                "heritage-tan": "#E6DCCA",
                "heritage-dark": "#1A1A18",
                "heritage-gray": "#4A4A4A",
            },
            fontFamily: {
                serif: ["DM Serif Display", "serif"],
                sans: ["Inter", "sans-serif"],
                mono: ["Space Mono", "monospace"],
            },
            backgroundImage: {
                "paper-texture":
                    "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRjVGMkVBIi8+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPgo8L3N2Zz4=')",
            },
        },
    },
    plugins: [
        import('@tailwindcss/forms'),
        import('@tailwindcss/container-queries'),
    ],
}
