import React, { Component } from 'react';
import Picture from './Picture';
import Button from './Button';
import PictureList from './PicturesList';

class App extends Component {
  constructor(props) {
    super(props);
this.state = {
      pictures: [
        {id: 1, src: 'http://via.placeholder.com/200x100'},
        {id: 2, src: 'http://via.placeholder.com/400x200'},
        {id: 3, src: 'http://via.placeholder.com/200x100'}
      ],
      currentPic: null
    };
this.setCurrentPic = this.setCurrentPic.bind(this);
  }
setCurrentPic(id) {
    this.setState({currentPic: id});
  }
  render () {

    return (
      <div>
        <div className='squares'>
          <PictureList>
              <Picture src={this.state.pictures[0].src}>
                <p>Hey, I'm some text!</p>
              </Picture>
              <Picture alt={1} src={this.state.pictures[1].src}>
                <Button height={100} pictureSrc={this.state.pictures[1].src}></Button>
              </Picture>
              <Picture src={this.state.pictures[2].src}>
                {/* <Picture src={this.state.pictures[2].src} /> */}
                <p>oi</p>
              </Picture>
            </PictureList>
        </div>
        <div>
          <p>Current selected picture ID is {this.state.currentPic}</p>
        </div>
      </div>
    )
  }
}
export default App;
