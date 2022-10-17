import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import axios from "axios";

export const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    let endpoints = [];
    for (let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);

      let response = axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => setPokemon(res));
    }
  };

  const pokemonFilter = () => {
    let filteredPokemon = [];
    for (let i in pokemon) {
      if (pokemon[i].data.name.includes()) {
        filteredPokemon.push(pokemon[i]);
      }
    }
    console.log(filteredPokemon);
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="xg">
        <Grid container spacing={3}>
          {pokemon.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
