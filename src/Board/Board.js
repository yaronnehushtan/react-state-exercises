import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {

	constructor(props) {
		super(props);
		this.state= {
			chosenOption: [false,false,false]
			
		}
		
	}

	chooseBoard(e){
		const options = [false,false,false];
		options[e.target.id]=true;
		this.setState({
			chosenOption: options
		});
	}

	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards" >
					<div className={this.state.chosenOption[0] ? 'Board-option-red' : 'Board-option'} id={0} onClick={this.chooseBoard.bind(this)}>1</div>
					<div className={this.state.chosenOption[1] ? 'Board-option-red' : 'Board-option'} id={1} onClick={this.chooseBoard.bind(this)}>2</div>
					<div className={this.state.chosenOption[2] ? 'Board-option-red' : 'Board-option'} id={2} onClick={this.chooseBoard.bind(this)}>3</div>
				</div>
			</div>
		);
	}
}

export default Board;