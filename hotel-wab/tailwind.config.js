/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // บรรทัดนี้สำคัญมาก!
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", // ต้องมี .tsx เพื่อให้ใช้ได้กับ React TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}