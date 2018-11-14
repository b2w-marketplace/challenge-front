import React, { Component } from "react";
import ExplanationTitle from "./ExplanationTitle";
import ExplanationTexts from "./ExplanationTexts";

export default class CandidateExplanation extends Component {
  render() {
    return (
      <div className="row px-1 px-md-5 pt-2 pb-3">
        <div className="col-12">
          {this.props.array ? (
            <div>
              <ExplanationTitle explanationTitle={this.props.expTitle} />
              <ExplanationTexts array={this.props.array} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
