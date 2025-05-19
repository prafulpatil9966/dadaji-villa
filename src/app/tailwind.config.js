module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',      // for pages in the /pages directory
    './components/**/*.{js,ts,jsx,tsx}', // for reusable components
    './app/**/*.{js,ts,jsx,tsx}',        // if you're using Next.js app directory (Next 13+)
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
};
