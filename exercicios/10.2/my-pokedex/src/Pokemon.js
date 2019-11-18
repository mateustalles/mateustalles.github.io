import pokemons from './data.js'
import React from 'react';
import './Pokedex.css';

class Pokemon extends React.Component {
  render() {
    const that = this
    const poke = pokemons.find(pokemon => pokemon.name === that.props.pokeName);
    const {name, type, averageWeight: {value, measurementUnit}, image, moreInfo } = poke

    return (<div className="pokemon">
        <img src={image} alt={name}/>
        <ul>
          <li>Name: {name}</li>
          <li>Type: {type}</li>
          <li>Average Weight: {value}{measurementUnit}</li>
          <li><a href={moreInfo}>More Info</a></li>
        </ul>
      </div>
      )
    }
  }

export default Pokemon;