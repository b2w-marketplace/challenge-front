import './Skill.css';
import React from 'react';

function Skill(props) {
	return (
		<div className="skill-container" key={ props.name }>
			<h3 className="skill-title">{ props.name }</h3>
			<div className="skill-bar">
				<div className="skill-value" style={{width: props.value }}></div>
			</div>
		</div>
	)
}

export default Skill;