import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component{
	render(){
		return (
			<article class="detail-container" key={ this.props.name }>
				<h3 class="detail-role">{ this.props.name }</h3>
				<span class="detail-date">{ this.props.date }</span>
				<p>{ this.props.description }</p>
			</article>
		)
	}
}

export default Detail;