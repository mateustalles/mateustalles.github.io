import React, { Component } from 'react';
class Picture extends Component {
  render() {
  return (
    <div className='picture'>
      <img src={this.props.src} alt="img" className='picture'/>
      {this.props.children}
    </div>
  )
  }
}
export default Picture;
