import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogBoolean: false,
      dogUrl: [],
    }
  }

  componentDidMount = () => {
    dog()
    .then(url => this.setState((state) => ({ dogUrl: state.dogUrl.concat(url.message + ' ') })))
  }

  doguitosBoolean = () => {
    this.setState((state) => ( { dogBoolean: !state.dogBoolean }))
  }

  summonNewDoguito = () => {

    dog()
      .then(url => this.setState((state) => ({ dogUrl: state.dogUrl.concat(url.message + ' ') })))

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Doguitchos!</h1>
          <button type="button" onClick={this.doguitosBoolean}>Conjure um Doguitcho!</button>
          <div className="gallery">
            {this.state.dogBoolean ? <Doguitcho url={this.state.dogUrl}/> : undefined}
          </div>
          <button type="button" onClick={this.summonNewDoguito}>Refresh doguito!</button>
        </header>
      </div>
    );
  }
}

async function dog() {
  try {
    const doguito = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await doguito.json();
    return data
  }
  catch (err) {
    console.log(`Erro: ${err}`)
  }
}


class Doguitcho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    }
  }

  nameHandler = (event,key) => {
    const newDog = { [key]: event.target.value }
      if (this.state.dogs.length === 0) {
        this.setState((state) => ({ dogs: state.dogs.concat(newDog) }))
      } else {
        this.setState((state) => ({ dogs: state.dogs.concat(newDog) }))
      }
  }

  render() {
    const dogsArray = this.props.url
    return (
      <>
      {dogsArray.map((dog) => (
        <div className="gallery-card" key={dogsArray.indexOf(dog)}>
          <img src={dog} alt="Doggy" />
          <label htmlFor="doggy-name">
            Doggy Name:
          <input type="text" value={this.state.dogs[dogsArray.indexOf(dog)[1]]} onBlur={(event) => this.nameHandler(event,dogsArray.indexOf(dog))} />
          </label>
        </div>
      ))}
      </>
      )

  }

  // return  console.log(dogsArray)

}

export default App;
