import React from "react";
import { useRouter } from "next/router";
import PokemonItem from "../src/components/PokemonItem";
import Sidebar from "../src/components/Sidebar";

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { genid: "1" } },
			{ params: { genid: "2" } },
			{ params: { genid: "3" } },
			{ params: { genid: "4" } },
			{ params: { genid: "5" } },
			{ params: { genid: "6" } },
			{ params: { genid: "7" } },
		],
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const res = await fetch(`http://localhost:5000/${params.genid}`);
	const pokemons = await res.json();

	return {
		props: {
			pokemons,
		},
	};
}

function GenPage({ pokemons }) {
	const router = useRouter();
	const { genid } = router.query;
	return (
		<div>
			<p className="uppercase text-gray-400 tracking-widest text-sm mt-4 text-center">
				Showing results for generation {genid}
			</p>

			<div id="content" className="lg:flex py-5">
				<div
					className="w-11/12 mx-auto max-w-md lg:mx-2 lg:w-10/12 lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-5 px-10"
					id="pokemon-list"
				>
					{pokemons.map((pokemon) => (
						<PokemonItem key={pokemon.id} {...pokemon} />
					))}
				</div>

				<Sidebar />
			</div>
		</div>
	);
}

export default GenPage;
