import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogBoolean: false,
      dogUrl: '',
    }
  }

  componentDidMount = () => {
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
    dog()
      .then(url => this.setState({ dogUrl: url.message }));
  }

  doguitosBoolean = () => {
    this.setState((state) => ( { dogBoolean: !state.dogBoolean }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Doguitchos!</h1>
          <button type="button" onClick={this.doguitosBoolean}>Conjure um Doguitcho!</button>
          {this.state.dogBoolean ? <Doguitcho url={this.state.dogUrl}/> : <div />}
          <button type="button" onClick={this.componentDidMount}>Refresh doguito!</button>
        </header>
      </div>
    );
  }
}

function Doguitcho(props) {
  const dogsArray = [].concat(props.url)
  return dogsArray.map((dog) => <img key={dogsArray.length} src={dog} alt="Doggy" />)
}

export default App;
