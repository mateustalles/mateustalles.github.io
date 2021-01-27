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
        <h1>Welcome to your Pokédex!</h1>
      </div>
      <div className="row">

          {pokemons.map(pokemon =><div className="col-sx-12 col-md-6">
            <Pokemon key={pokemon.id} pokeName={pokemon.name}/>
            </div>)}

      </div>
    </div>
  )

  }
}

export default Pokedex;