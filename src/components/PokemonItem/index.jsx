import React from "react";

function PokemonItem({ name, id, types }) {
	return (
		<div
			className={`shadow-lg w-full mx-auto my-4 md:my-0 ring-2 ring-red-500 text-red-500 bg-white rounded-md grid grid-cols-3 grid-rows-1 py-2 px-3 items-center cursor-pointer hover:bg-red-600 hover:text-white hover:shadow-2xl transition-all`}
		>
			<div className="rounded-full ring-1 ring-red-500 w-16 h-16 bg-white overflow-hidden col-start-1 col-end-1 p-2">
				<img
					className="h-full w-full transform scale-150"
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
				/>
			</div>
			<div className="col-start-2 col-end-4 flex flex-col">
				<h2 className="font-semibold text-xl text-center my-1 flex items-center justify-center">
					<span className="text-sm mr-1">#{id}</span>
					{name[0].toUpperCase() + name.substring(1)}
				</h2>
				<div className="flex w-full my-1 items-center justify-center text-white">
					{types.map((type) => (
						<p
							key={`${id}__${type.type.name}`}
							className={`rounded bg-${type.type.name} px-2 ring-1 mx-2 ring-white`}
						>
							{type.type.name[0].toUpperCase() + type.type.name.substring(1)}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}

export default PokemonItem;
