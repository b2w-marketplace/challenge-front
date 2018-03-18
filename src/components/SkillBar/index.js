import React from 'react';
import './index.css';

const SkillBar = (props) => {
  return (
    <div className="skill__wrapper">
      <p className="skill__title">
        { props.name }
      </p>

      <div className="skill__bar">
        <div 
          className="skill__bar-fill"
          style={{width: props.value }}>
          <span className="visuallyhidden">{`Skill level: ${ props.value }`}</span>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;