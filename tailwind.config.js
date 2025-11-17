/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {}, // aqui a gente pode criar themas pre definidos pro projeto - como um border-radius padrão pra tudo, ou uma cor diferente que não tem na propria documentação do tailwind nativo
  },
  plugins: [],
};
