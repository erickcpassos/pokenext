module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				water: "#0786f5",
				poison: "#9607f5",
				grass: "#008211",
				flying: "#8b9ef7",
				ground: "#d4b757",
				rock: "#6b6b6b",
				normal: "#b3b3b3",
				electric: "#e3cc00",
				psychic: "#e300e3",
				fairy: "#ff61ff",
				fire: "#ff5500",
				ice: "#4bf2e2",
				bug: "#5ba100",
				fighting: "#ff0a1b",
				ghost: "#49006e",
				dark: "#140900",
				dragon: "#4300e0",
				steel: "#9e9e9e",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
