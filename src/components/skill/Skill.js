import React, { Component } from 'react';
import './Skill.css';

class Skill extends Component{
	render(){
		return (
			<div className="skill-container" key={ this.props.name }>
				<h3 className="skill-title">{ this.props.name }</h3>
				<div className="skill-bar">
					<div className="skill-value" style={{width: this.props.value }}></div>
				</div>
			</div>
		)
	}
}

export default Skill;