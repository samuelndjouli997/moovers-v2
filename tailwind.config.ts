import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1440px",
      },
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      md: ["18px", "26px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "3xl": ["32px", "40px"],
      "4xl": ["40px", "48px"],
      "6xl": ["64px", "80px"],
    },
    extend: {
      colors: {
        /* 🎨 Couleurs personnalisées */
        "marine-blue": "#1e3a8a",
        "decathlon-blue": "#2563eb",
        "fluo-green": "#22c55e",
        "secondary-marine-blue": "#0f172a",

        /* 🎨 Autres couleurs */
        "primary-black": "#171717",
        "secondary-black": "#1F1F1F",
        "primary-purple": "#a238ff",
        "primary-red": "#D34747",
        "dark-grey": "#404040",
        "lighter-grey": "#c2c0c4",
        "light-grey": "#BBBBBF",
        "primary-grey": "#B2B2B2",
        "lighter-dark-grey": "#53595F",
        
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      /* 🔤 Fonts personnalisées */
      fontFamily: {
        neulis: ["neulis-cursive", "sans-serif"],
        cursiveHairline: ["neulis-cursive-hairline", "sans-serif"],
        verdana: ["Verdana", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    // require("tailwindcss-animate"), 
  ],
} satisfies Config;
