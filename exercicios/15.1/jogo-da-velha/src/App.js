import React from 'react';
import JogoDaVelha from './modules/JogoDaVelha';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Jogo da Velha
        </p>
        <JogoDaVelha />
      </header>
    </div>
  );
}

export default App;
