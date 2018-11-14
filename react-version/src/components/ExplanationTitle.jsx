import React, { Component } from "react";
import "../styles/explanation-title.css";

export default class ExplanationTitle extends Component {
  render() {
    return (
      <div className="row mb-2">
        <div className="col-12">
          <h5 className="explanation-title text-uppercase  font-weight-bold pb-3">
            {this.props.explanationTitle}
          </h5>
        </div>
      </div>
    );
  }
}
