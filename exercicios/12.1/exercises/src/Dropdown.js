import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
        }

    }

    stateSelected = (event) => {
        const actualMovie = event.target.innerHTML
        this.setState({ selectedValue: actualMovie })
    }

    render() {
    return (
        <div className="App">
            {this.props.children}
            {this.props.displayState ? <ul>
                {this.props.movies.map((movie) => (<li key={movie.id} value={movie.item} onClick={this.stateSelected}>{movie.item}</li>))}
                </ul> : undefined}
            <div>
                Filme selecionado: {this.state.selectedValue === '' ? this.props.movies[0].item : this.state.selectedValue}
            </div>
        </div>
    );
    }
}

Dropdown.defaultProps = {
    children: <div><h4>Lista de filmes favoritos da Mariene #SQN</h4></div>
  }

export default Dropdown;

Dropdown.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
}