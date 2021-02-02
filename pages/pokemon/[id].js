import { useRouter } from "next/router";
import Stat from "../../src/components/Stat";
import EvolutionInfo from "../../src/components/EvolutionInfo";
import { BsArrowLeft } from "react-icons/bs";
import { BiHome } from "react-icons/bi";

export async function getStaticPaths() {
  let paths = [];
  for (let i = 1; i <= 898; i++) {
    paths.push({ params: { id: i.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:5000/pokemon/${params.id}`);
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

function PokemonPage({ pokemon }) {
  const { id, name, types, height, weight, stats, description } = pokemon;
  const router = useRouter();
  return (
    <div className="relative px-2 lg:w-9/12 mx-auto">
      <BsArrowLeft
        onClick={() => router.back()}
        className="text-3xl absolute left-3 text-red-500 cursor-pointer lg:left-24 lg:text-4xl"
      />
      <BiHome
        onClick={() => router.push("/")}
        className="text-3xl absolute right-3 top-0 text-red-500 cursor-pointer lg:left-36 lg:text-3xl"
      />
      <h1 className="text-3xl font-bold mt-5 mb-0 text-center">
        {pokemon.name.toUpperCase()}
      </h1>
      <div className="flex w-full mt-0 mb-5 items-center justify-center text-white">
        {types.map((type) => (
          <p
            key={`${id}__${type.type.name}`}
            className={`rounded bg-${type.type.name} px-2 ring-1 mx-2 ring-white`}
          >
            {type.type.name[0].toUpperCase() + type.type.name.substring(1)}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:w-10/12 mx-auto">
        <div
          className="ring-2 ring-red-500 w-40 h-40 rounded-tl-lg rounded-br-lg bg-white self-center justify-self-center"
          id="pokemon-image"
        >
          <img
            className="w-full h-full"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
        </div>

        <div id="infos">
          {stats.map((stat) => {
            const value = stat.base_stat;
            const attribute = stat.stat.name;
            const abbreviations = {
              "special-attack": "SP-ATK",
              "special-defense": "SP-DEF",
              defense: "DEF",
              attack: "ATK",
              hp: "HP",
              speed: "SPD",
            };
            return (
              <Stat
                attribute={abbreviations[attribute].toUpperCase()}
                value={value}
              />
            );
          })}
          <Stat attribute="Height" value={height} />
          <Stat attribute="Weight" value={weight} />
        </div>
      </div>
      <p className="text-center my-3 italic w-10/12 mx-auto">{description}</p>
      <EvolutionInfo />
    </div>
  );
}

export default PokemonPage;
