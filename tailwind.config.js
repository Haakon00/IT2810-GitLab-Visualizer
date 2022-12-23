/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "200px",
				// => @media (min-width: 992px) { ... }
			},
		},
	},
	plugins: [require("daisyui")],
};
