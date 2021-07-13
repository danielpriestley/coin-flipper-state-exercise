import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlipper extends Component {
	static defaultProps = {
		curSide: 'heads'
	};
	constructor(props) {
		super(props);
		this.state = {
			numFlips: 0,
			numHeads: 0,
			numTails: 0,
			sides: [ 'heads', 'tails' ],
			curSide: ''
		};

		this.flip = this.flip.bind(this);
	}

	flip() {
		this.setState((curState) => ({
			curSide: curState.sides[Math.floor(Math.random() * curState.sides.length)],
			numFlips: curState.numFlips + 1
		}));

		if (this.state.curSide === 'tails') {
			this.setState((curState) => ({
				numTails: curState.numTails + 1
			}));
		} else {
			this.setState((curState) => ({
				numHeads: curState.numHeads + 1
			}));
		}
	}
	render() {
		return (
			<div>
				<h1>Flipper</h1>
				<Coin side={this.state.curSide} />
				<button onClick={this.flip}>Flip</button>
				<p>
					There has been {this.state.numFlips} flips with {this.state.numTails} tails and{' '}
					{this.state.numHeads} heads
				</p>
			</div>
		);
	}
}

export default CoinFlipper;
