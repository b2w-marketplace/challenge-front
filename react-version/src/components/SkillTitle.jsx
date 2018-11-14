import React, { Component } from "react";
import "../styles/skill-title.css";

export default class SkillTitle extends Component {
  render() {
    return (
      <div className="row mb-2" key="SkillTitle">
        <div className="col text-center">
          <h5 className="skill-title text-uppercase text-white pb-3 font-weight-bold">
            {this.props.skillTitle}
          </h5>
        </div>
      </div>
    );
  }
}
