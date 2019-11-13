import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const taskList = ['Um, dois, feijão com arroz', 'Três,quatro, feijão no prato', 'Cinco, seis, falar inglẽs', 'Sete, oito, comer biscoito', 'Nove, dez, comer pasteis']
  return (<div>
    <h1>Lista de tarefas</h1>
<ol>{taskList.map(task => <li>{task}</li>)}</ol>
  </div>
  );
}

export default App;
