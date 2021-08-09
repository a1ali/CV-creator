const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
			colors: {
                lime: colors.lime,
                gray: colors.coolGray,
            },
		},
    },
    variants: {
        extend: {
            scrollbar: ['dark', 'rounded'],
        },
    },
    plugins: [
		require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
	],
};
