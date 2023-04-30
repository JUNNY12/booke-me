/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink': {
          '50': '#fdf3f4',
          '100': '#fbe8eb',
          '200': '#f6d5da',
          '300': '#ea9daa',
          '400': '#e58799',
          '500': '#d75c77',
          '600': '#c13d60',
          '700': '#a22e4f',
          '800': '#882947',
          '900': '#752642',
          '950': '#411020',
        },
        'white': {
          '50': '#ffffff',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        'black': {
          '50': '#f7f7f7',
          '100': '#e3e3e3',
          '200': '#c8c8c8',
          '300': '#a4a4a4',
          '400': '#818181',
          '500': '#666666',
          '600': '#515151',
          '700': '#434343',
          '800': '#383838',
          '900': '#313131',
          '950': '#000000',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-1': 'url("/bg1.jpeg")',
        'bg-2': 'url("/bg-2.jpg")',
        'bg-3': 'url("/bg3.jpg")',
      },
    },
  },
  plugins: [],
}
