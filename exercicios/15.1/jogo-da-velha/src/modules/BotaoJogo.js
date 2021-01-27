import React, { Component } from 'react';
import './BotaoJogo.css'


class BotaoJogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    }
    this.statusHandler = this.statusHandler.bind(this);
  }

  statusHandler() {
    this.setState({ status: false });
  }

  render() {
    return(
      <div onClick={this.statusHandler} className="square">
        {this.props.children}
      </div>
    )
  };
};

export default BotaoJogo;
