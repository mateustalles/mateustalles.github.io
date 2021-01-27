import React from 'react';
import pokemons from './data.jsx';
import './Pokedex.css';
import 'bootstrap/dist/css/bootstrap.css';


function Pokemon() {
  const that = this;
  const poke = pokemons.find((pokemon) => pokemon.name === that.props.pokeName);
  const {
    name, type, averageWeight: { value, measurementUnit }, image, moreInfo,
  } = poke;

  return (
      <div className="card flex-row flex-wrap">
        <img className="card-img-top w-50" src={image} alt={name} />
        <div className="card-body h-100 b-0">
          <ul className="list-group">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Type: {type}</li>
            <li className="list-group-item">Average Weight: {value}{measurementUnit}</li>
            <li className="list-group-item"><a href={moreInfo}>More Info</a></li>
          </ul>
        </div>
      </div>
  );
}

export default Pokemon;
