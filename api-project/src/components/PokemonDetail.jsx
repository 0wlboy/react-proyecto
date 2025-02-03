import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PokemonDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pokemon } = location.state; // Obtener el Pokémon desde el estado

  const handleBack = () => {
    navigate(-1); // Regresar a la página anterior
  };

  return (
    <div className="flex flex-col items-center p-4">
      <img src={pokemon.image} alt={pokemon.name} className="w-64 h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4 capitalize">{pokemon.name}</h1>
      <p className="mt-2">ID: {pokemon.id}</p>
      <h2 className="mt-4 text-xl">Tipos:</h2>
      <ul className="list-disc pl-5">
        {pokemon.types.map((type) => (
          <li key={type.type.name} className="capitalize">{type.type.name}</li>
        ))}
      </ul>
      <h2 className="mt-4 text-xl">Habilidades:</h2>
      <ul className="list-disc pl-5">
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name} className="capitalize">{ability.ability.name}</li>
        ))}
      </ul>
      <h2 className="mt-4 text-xl">Estadísticas:</h2>
      <ul className="list-disc pl-5">
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name} className="capitalize">{stat.stat.name}: {stat.base_stat}</li>
        ))}
      </ul>
      <button 
        onClick={handleBack} 
        className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        Regresar
      </button>
    </div>
  );
};

export default PokemonDetail;