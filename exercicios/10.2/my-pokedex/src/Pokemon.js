import data from './data'
import React from 'react';
import './Pokedex.css';

class Pokemon extends React.Component {
  render() {
    const specificPokemon = data.pokemons.find(pokemon => pokemon.name === this.pŕops.pokemonName);
    const {id, name, type, averageWeight: {value, measurementUnit}, image, moreInfo } = specificPokemon;
    const pokeItem = <div className="pokemon">
        <img src={image} alt={name}/>
        <ul>
          <li>Name: {name}</li>
          <li>Type: {type}</li>
          <li>Average Weight: {value}{measurementUnit}</li>
          <li><a href={moreInfo}>More Info</a></li>
        </ul>
      </div>

    return({pokeItem})

    }
  }

export default Pokemon;