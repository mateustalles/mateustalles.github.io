import React from 'react';
import pokemons from './data';
class Button extends React.Component {
  render() {
    return (
      <button className="btn btn-secondary m-1 btn-lg" onClick={this.props.callback} id={this.props.type}>{this.props.type}</button>
    )
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <div>
        {pokemons.reduce((types, {type}) => {
        if (types.includes(type)) {
          return types
         } else {
           types.push(type)
           return types
    }}, []).map((type) => <Button key={type} callback={this.props.callback} type={type} />)
        }
        <Button key="all" callback={this.props.callback} type="All" />
      </div>

    )
  }
}

export default Buttons;