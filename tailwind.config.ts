import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./demo.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'msung-hk': ['var(--font-msung-hk)', 'Noto Sans TC', 'PingFang TC', 'Heiti TC', 'Microsoft JhengHei', 'Apple LiGothic Medium', 'Hiragino Sans GB', 'Noto Sans CJK TC', 'MSung HK', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

