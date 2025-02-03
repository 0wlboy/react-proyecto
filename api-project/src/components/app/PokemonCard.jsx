import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
  };

  return (
    <div className="border rounded-lg p-4 shadow-md m-4">
      <img src={pokemon.image} alt={pokemon.name} className="w-full h-68 object-cover rounded" />
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

PokemonCard.propTypes = {
  pokemon: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;