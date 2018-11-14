import React, { Component } from "react";
import "../styles/skill-progress-bar.css";

export default class SkillProgressBar extends Component {
  createSkills() {
    const children = [];
    this.props.skills.forEach((skill, index) => {
      const style = {
        width: skill.value
      };
      children.push(
        <div className="row mb-3" key={skill.name + index}>
          <div className="col text-center">
            <p className="text-uppercase text-white mb-2">
              <small>{skill.name}</small>
            </p>
            <div className="progress-bar m-auto">
              <div className="bar" style={style} />
            </div>
          </div>
        </div>
      );
    });
    return children;
  }
  render() {
    return <div>{this.createSkills()}</div>;
  }
}
