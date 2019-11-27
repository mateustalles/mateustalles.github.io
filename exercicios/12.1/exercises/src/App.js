import React, { Component } from 'react';
import Dropdown from './Dropdown';
import movies from './data';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayList: false,
        }
    }

    displayListToggle = () => {
        this.setState((state) => ({ displayList: !state.displayList}))
    }

    render() {
        return (
            <div className="App" >
                <Dropdown callback={() => this.displayListToggle} displayState={this.state.displayList} movies={movies}>
                <div onClick={this.displayListToggle}><h4>Lista de filmes favoritos da Mariene</h4></div>
                </Dropdown>
            </div>
        );
    }
}

export default App;
