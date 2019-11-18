import pokemons from './data'
import React from 'react';
import Pokemon from './Pokemon'
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
  return (
    <div className="pokedex">
      {pokemons.map(pokemon =><Pokemon key={pokemon.id} pokeName={pokemon.name}/>)}
    </div>
  )

  }
}

export default Pokedex;