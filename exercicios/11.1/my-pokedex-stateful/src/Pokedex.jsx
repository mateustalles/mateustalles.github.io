import pokemons from './data'
import React from 'react';
import Pokemon from './Pokemon'
import './Pokedex.css';
import 'bootstrap/dist/css/bootstrap.css';
import Buttons from './Button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeIndex : 0,
      type: 'All',
      pokeLength: false,
    }
  }

  setStateAll = () => this.setState({type: 'All'})


  pokemonType = () => {
      const pokeType = pokemons.filter((pokemon) => [pokemon.type, 'All'].includes(this.state.type))
      return pokeType;
  }

  nextPoke = () => {
    this.state.pokeIndex === (this.pokemonType().length - 1) ? this.setState({pokeIndex : 0}): this.setState((state)=> ({pokeIndex: state.pokeIndex + 1}))
  }

  previousPoke = () => {
    this.state.pokeIndex === 0 ? this.setState({pokeIndex : this.pokemonType().length - 1}): this.setState((state)=> ({pokeIndex: state.pokeIndex - 1}))
  }

  setType = (event) => {
    this.setState({type: event.target.id,
    pokeIndex : 0,
    })
    pokemons.filter((pokemon) => [pokemon.type, 'All'].includes(event.target.id)).length > 1 ? this.setState({pokeLength : false}) : this.setState({pokeLength: true})
  }

  render() {
  return (
    <div className="container d-flex flex-column">
      <div className="jumbotron">
        <h1>Welcome to your Pokédex!</h1>
      </div>
      <div className="d-flex flex-column bd-highlight">
        <div className="d-flex flex-row bd-highlight justify-content-center">
          <button className="btn btn-primary" onClick={this.previousPoke} disabled={this.state.pokeLength} id="previousPoke">Anterior</button>
          <div className="col-sx-4 col-md-4">
            <Pokemon pokeName={this.pokemonType()[this.state.pokeIndex].name}/>
            </div>
          <button className="btn btn-primary" onClick={this.nextPoke} disabled={this.state.pokeLength} id="nextPoke">Próximo</button>
        </div>
        <div className="d-flex bd-highlight justify-content-center w-100">
          <Buttons callback={this.setType} />
        </div>
      </div>
    </div>
  )

  }
}

export default Pokedex;