import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            backgroundOpacity: {
                '56': '0.56',
              },
            gradientColorStops: (theme) => ({
                'hsla-265': 'hsla(265, 53%, 29%, 1)',
                'hsla-296': 'hsla(296, 25%, 36%, 1)',
              }),
            colors: {
                Bgdefault:'#141c27',
                Bgside: '#1B1A1A',
                bgHome: '#1b1a1a',
                card: '#202026',
                box1: '#d3516b',
                box2: '#94cee1',
                box3: '#ae89ab',
                box4: '#f5e285',
                box5: '#ea9069',
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                Teko: ['Teko', 'sans-serif'],
                Poppins: ['Poppins', 'sans-serif'],
                Roboto: ['Roboto', 'sans-serif'],
            },
        },
    },

    plugins: [forms, require("daisyui")],
};
