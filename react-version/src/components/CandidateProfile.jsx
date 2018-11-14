import React, { Component } from "react";
import GridLeft from "./GridLeft";
import SkillTitle from "./SkillTitle";

export default class CandidateProfile extends Component {
  render() {
    return (
      <GridLeft>
        <SkillTitle skillTitle="Profile" />
        {this.props.description ? (
          <p>
            <small>{this.props.description}</small>
          </p>
        ) : null}
      </GridLeft>
    );
  }
}
