import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PicturesList extends Component {
  render() {
    const children = [].concat(this.props.children);
    console.log(children);
    return (
      <ul>
        {children.map((child) => (<li key={this.props.children.indexOf(child)}>{child}</li>))}
      </ul>
    )
  }
}

export default PicturesList;

PicturesList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
}