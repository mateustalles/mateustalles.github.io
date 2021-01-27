import React, { Component } from 'react';
import './JogoDaVelha.css'
import BotaoJogo from './BotaoJogo';

class JogoDaVelha extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          lastPlay: 'Y',
        }
        this.circleOrCross = this.circleOrCross.bind(this);
    }

    circleOrCross(event) {
        const { lastPlay } = this.state;
        if( lastPlay === 'Y') {
            event.target.props.children = 'X'
        } else {
            event.target.value = 'Y'
        }
    }

    render() {
        const gameArray = [];
        for (let i = 0; i < 9; i++){
            gameArray.push('square'+(i+1));
        } 
        return (
            <div className="game-container">
                {gameArray.map((square) => <BotaoJogo id={square} value=' ' key={gameArray.indexOf(square)} onClick={(e) => this.circleOrCross}></BotaoJogo>)}
            </div>
            )
        }
    }
    
    export default JogoDaVelha;
