import React, { Component } from 'react';

class Coin extends Component {
	render() {
		return (
			<div>
				<img src={`https://tinyurl.com/react-coin-${this.props.side}-jpg`} alt={this.props.side} />
				{console.log(`https://tinyurl.com/react-coin-${this.props.side}-jpg`)}
			</div>
		);
	}
}

export default Coin;
