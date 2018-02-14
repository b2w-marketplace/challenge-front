import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		return (
			<div className="card">
				<h2 className="card_title">{ this.props.name }</h2>
				<span className="card_date">{ this.props.date }</span>
				<p className="card_description">{ this.props.description }</p>
			</div>
		)
	}
}

export default Card;