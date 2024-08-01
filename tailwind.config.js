/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "button": "#d6fd51",
        "best": "#1c1c1c"
      },
      boxShadow: {
        'button': '0 2px 4px rgba(0, 0, 0, 0.25), 0 -2px 4px rgba(0, 0, 0, 0.25), 2px 0 4px rgba(0, 0, 0, 0.25), -2px 0 4px rgba(0, 0, 0, 0.25)',
      },

      screens: {
        "xs": "400px"
      },


      backgroundImage: {
        'home': "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      },
      animation: {

      },
      keyframes: {
        slideIn: {
          from: { transform: 'translateX(-100%)', opacity: " 0" },
          to: { transform: 'translateY(0)', opacity: "1" },
        },
        slideOut: {
          from: { transform: 'translateX(0)', opacity: " 1" },
          to: { transform: 'translateX(-100%)', opacity: "0" },
        },
        slideLeft: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' }
        },
        slideRight: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }
    },
  },
  plugins: [],
};
