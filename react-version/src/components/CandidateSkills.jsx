import React, { Component } from "react";
import GridLeft from "./GridLeft";
import SkillTitle from "./SkillTitle";
import SkillProgressBar from "./SkillProgressBar";

export default class CandidateSkills extends Component {
  render() {
    return (
      <GridLeft>
        {this.props.skills ? (
          <div>
            <SkillTitle skillTitle="Skills" />
            <SkillProgressBar skills={this.props.skills} />
          </div>
        ) : null}
      </GridLeft>
    );
  }
}
