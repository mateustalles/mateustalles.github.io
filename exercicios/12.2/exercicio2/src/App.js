import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogBoolean: false,
      dogUrl: [],
      dogName: [],
    }
  }

  componentDidMount = () => {
    this.summonNewDoguito();
  }

  doguitosBoolean = () => {
    this.setState((state) => ( { dogBoolean: !state.dogBoolean }))
  }

  summonNewDoguito = () => {
    if (this.state.dogUrl.length > 9) {
      this.state.dogUrl.shift();
      this.state.dogName.shift();
    }
    dog()
    .then(url => {
      const objUrl = { url: url.message }
      this.setState((state) => ({ dogUrl: state.dogUrl.concat(objUrl) }))
    })
  }

  updateParentDogState = (key, name) => {
    const newDog = { [key]: name.target.value }
    this.setState((state) => ({ dogName: Object.assign(state.dogName, newDog) }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Doguitchos!</h1>
          <button type="button" onClick={this.doguitosBoolean}>Summon Doguitcho!</button>
          <div className="gallery">
            {this.state.dogBoolean ? <Doguitcho url={this.state.dogUrl} updateParentDogState={this.updateParentDogState} propsDogs={this.state.dogName}/> : undefined}
          </div>
          <button type="button" onClick={this.summonNewDoguito}>Summon one more Doguitcho!</button>
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

  render() {
    const dogsArray = this.props.url

    return (
      <>
      {dogsArray.map((dog) => (
        <div className="gallery-card" key={dogsArray.indexOf(dog)}>
          <img src={dog.url} alt="Doggy" />
          <label htmlFor="doggy-name">
            Doggy Name:
          <input
            type="text"
            value={this.props.propsDogs[dogsArray.indexOf(dog)] || ''}
            onChange={(event) => this.props.updateParentDogState(dogsArray.indexOf(dog), event)} />
          </label>
        </div>
      ))}
      </>
      )
  }
}

export default App;
