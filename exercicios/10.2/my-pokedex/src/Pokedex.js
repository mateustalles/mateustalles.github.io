import pokemons from './data'
import React from 'react';
import Pokemon from './Pokemon'
import './Pokedex.css';
import 'bootstrap/dist/css/bootstrap.css';

class Pokedex extends React.Component {
  render() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-row p-2 bd-highlight">
          {pokemons.map(pokemon =><Pokemon key={pokemon.id} pokeName={pokemon.name}/>)}
        </div>
      </div>
    </div>
  )

  }
}

export default Pokedex;