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
            colors: {
                Bgtrans: '#2a3845',
                Bgdefault:'#141c27'
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                Teko: ['Teko', 'sans-serif'],
            },
        },
    },

    plugins: [forms, require('flowbite/plugin')],
};
