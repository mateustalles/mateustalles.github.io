import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const taskList = ['Um, dois, feijão com arroz', 'Três,quatro, feijão no prato', 'Cinco, seis, falar inglẽs', 'Sete, oito, comer biscoito', 'Nove, dez, comer pasteis']
  const JSX = <div className='myDiv'>
<h1>Hello, Im JSX</h1>
<p>This goes a long description about me</p>
<ul><li>This</li>
<li>now you know</li>
<li>All right</li>
</ul>
</div>

  return (<div>
    <h1>Lista de tarefas</h1>
    <ol>{taskList.map(task => <li>{task}</li>)}</ol>
    {JSX}
        {/*This is JSX*/}

        {/*Ex. 6*/}
    <div>
      
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
      
    </div>

      {/*Ex 7*/}
      
      </div>
  );
  
}

export default App;
