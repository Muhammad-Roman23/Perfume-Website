  import type { Config } from "tailwindcss";

  const config: Config = {
    darkMode: "class",
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "rgb(var(--background))",
          foreground: "rgb(var(--foreground))",
          card: "rgb(var(--card))",
          "card-foreground": "rgb(var(--card-foreground))",
          border: "rgb(var(--border))",
          primary: "rgb(var(--primary))",
          "primary-foreground": "rgb(var(--primary-foreground))",
          secondary: "rgb(var(--secondary))",
          "secondary-foreground": "rgb(var(--secondary-foreground))",
        },
        fontFamily: {
          sans: ['poppins', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };

  export default config;