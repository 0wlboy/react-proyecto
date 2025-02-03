import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
  };

  return (
    <div className="border rounded-lg p-4 shadow-md m-4">
      <img src={pokemon.image} alt={pokemon.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2 capitalize">{pokemon.name}</h2>
      <button 
        onClick={handleViewMore} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Ver más
      </button>
    </div>
  );
};

export default PokemonCard;