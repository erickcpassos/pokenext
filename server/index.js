const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());

const getPokemonById = async (id) => {
  const pokemonData = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  ).then((res) => res.json());

  const extraInfo = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  )
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < res.flavor_text_entries.length; i++) {
        if (res.flavor_text_entries[i].language.name === "en") {
          return res.flavor_text_entries[i].flavor_text
            .replace("\n", " ")
            .replace("\u000c", " ");
        }
      }
    });

  return {
    ...pokemonData,
    description: extraInfo || "No description available :(",
  };
};

const getPokemonsByGen = async (gen) => {
  const genRange = {
    0: [1, 898],
    1: [1, 151],
    2: [152, 251],
    3: [252, 386],
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
  )
    .then((res) => {
      return pokemons;
    })
    .catch((err) => {
      console.log("Erro:", err);
    });

  return pokemonsList;
};

app.get("/", async (req, res) => {
  const pokemons = await getPokemonsByGen(0);
  let pokeList = [];
  for (const id in pokemons) {
    pokeList.push(pokemons[id]);
  }
  res.statusCode = 200;
  res.send(pokeList);
});

app.get("/:genid", async (req, res) => {
  const { genid } = req.params;
  const pokemons = await getPokemonsByGen(genid);
  let pokeList = [];
  for (const id in pokemons) {
    pokeList.push(pokemons[id]);
  }
  res.statusCode = 200;
  res.send(pokeList);
});

app.get("/pokemon/:id", async (req, res) => {
  const { id } = req.params;
  const pokemon = await getPokemonById(id);

  res.statusCode = 200;
  res.send(pokemon);
});

app.listen(5000, () => console.log("started..."));
