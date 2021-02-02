import React from "react";

function Header() {
	return (
		<header className="fixed top-0 left-0 w-full h-8 bg-gradient-to-b from-red-500 to-red-700 text-white shadow-xl ring-1 ring-red-700 rounded-bl-lg z-20">
			<h1 className="text-xl font-bold text-center">PokeNext</h1>
		</header>
	);
}

export default Header;
