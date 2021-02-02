const getPokemonsByGen = async (gen) => {
	const genRange = {
		1: [1, 151],
		2: [2, 251],
	};

	const [beginIdx, endIdx] = genRange[gen];
	let idxs = [];
	for (let i = beginIdx; i <= endIdx; i++) {
		idxs.push(i);
	}

	let pokemons = {};

	const pokemonsList = await Promise.all(
		idxs.map(async (idx) => {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idx}`);
			const pokemon = await response.json();

			pokemons[pokemon.id] = {
				id: pokemon.id,
				name: pokemon.name,
				types: pokemon.types,
			};
		})
	).then((res) => {
		return pokemons;
	});

	return pokemonsList;
};

async function PokeListHandler(request, response) {
	if (request.method === "OPTIONS") {
		response.status(200).end();
		return;
	}

	response.setHeader("Access-Control-Allow-Credentials", true);
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader(
		"Access-Control-Allow-Methods",
		"GET,OPTIONS,PATCH,DELETE,POST,PUT"
	);

	const pokemons = await getPokemonsByGen(1);
	let pokeList = [];
	for (const id in pokemons) {
		pokeList.push(pokemons[id]);
	}
	response.statusCode = 200;
	response.send(pokeList);
}

export default PokeListHandler;
