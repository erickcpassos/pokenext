import PokemonItem from "../src/components/PokemonItem";
import Sidebar from "../src/components/Sidebar";

export async function getStaticProps() {
	const res = await fetch("http://localhost:5000");
	const pokemons = await res.json();

	return {
		props: {
			pokemons,
		},
	};
}

export default function Home({ pokemons }) {
	return (
		<div>
			<p className="uppercase text-gray-400 tracking-widest text-sm mt-4 text-center">
				Showing results for all generations
			</p>

			<div id="content" className="lg:flex py-5">
				<div
					className="w-11/12 mx-auto max-w-md md:grid md:grid-cols-2 md:max-w-none md:gap-5 lg:mx-2 lg:w-10/12 lg:grid-cols-3 px-10"
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
