import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Picture extends Component {
  render() {
  return (
    <div className='picture'>
      <img src={this.props.src} alt={this.props.alt} className='picture'/>
      {this.props.children}
    </div>
  )
  }
}
export default Picture;

Picture.propTypes = {
  children: PropTypes.element.isRequired,
  alt : PropTypes.string.isRequired,
}