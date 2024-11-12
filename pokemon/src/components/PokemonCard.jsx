// src/components/PokemonCard.jsx
import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name.toUpperCase()}</h2>
      <p>Tipo: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
      <p>Altura: {pokemon.height / 10} m</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
    </div>
  );
};

export default PokemonCard;
