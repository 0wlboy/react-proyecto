import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { PokemonCard, PokemonDetail } from "../../components/components";
const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonPromises = [];
      for (let i = 1; i <= 151; i++) {
        pokemonPromises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }
      try {
        const responses = await Promise.all(pokemonPromises);
        const pokemonData = responses.map(response => ({
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.front_default,
          types: response.data.types,
          abilities: response.data.abilities,
          stats: response.data.stats,
        }));
        setPokemons(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto p-4">
        <button 
          onClick={toggleDarkMode} 
          className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
        <Routes>
          <Route path="/" element={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          } />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;