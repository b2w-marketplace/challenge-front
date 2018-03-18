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
          aria-label={`Skill level: ${ props.value }`} 
          style={{width: props.value }}>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;