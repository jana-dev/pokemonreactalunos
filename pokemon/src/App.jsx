// src/App.jsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import "./index.css";

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  const fetchPokemon = async (name) => {
    try {
      setError("");
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) throw new Error("Pokémon não encontrado");
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setPokemon(null);
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <h1>Busca de Pokémon</h1>
      <SearchBar onSearch={fetchPokemon} />
      {error && <p className="error">{error}</p>}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default App;
