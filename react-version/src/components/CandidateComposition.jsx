import React, { Component } from "react";
import SkillAvatar from "./SkillAvatar";

export default class CandidateComposition extends Component {
  render() {
    return (
      <div className="row py-5 px-1 px-md-5 border-bottom">
        <div className="col-12">
          <div className="container text-center text-white text-uppercase">
            {this.props.candidate ? (
              <div>
                <SkillAvatar image={this.props.candidate.image} />
                <h1 className="font-weight-bold mt-5">
                  {this.props.candidate.name}
                </h1>
                <p>{this.props.candidate.profession}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
