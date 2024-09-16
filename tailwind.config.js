/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure these paths are correct
    "./public/index.html",
    "./public/assets/css/**/*.css", // Add this line to include your CSS files
    "./src/**/*.{html,vue}", // Add any additional file types or directories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
