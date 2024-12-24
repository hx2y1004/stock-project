/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // 버튼 색상
        secondary: '#374151', // 배경 및 카드 색상
        accent: '#10B981', // 상승 색상
        danger: '#EF4444', // 하락 색상
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // 새로운 폰트 추가
      },
    },
  },
  plugins: [],
};
