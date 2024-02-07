import React, { useState, useEffect } from 'react';

const PokeArret = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const randomPokemonIds = Array.from({ length: 10 }, () => Math.floor(Math.random() * 898) + 1);
        const promises = randomPokemonIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`));
        const responses = await Promise.all(promises);
        const data = await Promise.all(responses.map(response => response.json()));
        setPokemonData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setLoading(false);
      }
    };

    fetchRandomPokemon();
  }, []);

  return (
    <div>
      <h2>Liste de 10 Pokémon</h2>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          {pokemonData.map(pokemon => (
            <div key={pokemon.id}>
              <h3>{pokemon.name}</h3>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>Stats:</p>
              <ul>
                {pokemon.stats.map(stat => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokeArret;
