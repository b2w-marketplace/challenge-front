import React, { Component } from 'react';
import './index.css';

class SkillBar extends Component {
  render() {
    return (
      <div className="skill__wrapper">
        <p className="skill__title">
          {this.props.name}
        </p>

        <div className="skill__bar">
          <div 
            className="skill__bar-fill" 
            aria-label={`Skill level: ${this.props.value}`} 
            style={{width: this.props.value}}>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillBar;