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

	await Promise.all(
		idxs.map(async (idx) => {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${idx}`
			).then((res) => res.json());

			pokemons[response.id] = {
				id: response.id,
				name: response.name,
				types: response.types,
			};
		})
	).then((res) => {
		return pokemons;
	});
};
