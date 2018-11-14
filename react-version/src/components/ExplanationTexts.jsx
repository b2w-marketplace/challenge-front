import React, { Component } from "react";

export default class ExplanationTexts extends Component {
  createTexts() {
    const children = [];
    this.props.array.forEach((obj, index) => {
      children.push(
        <div className="row pt-2 pb-0" key={obj.name + index}>
          <div className="col-12">
            <h6 className="text-uppercase font-weight-bold">{obj.name}</h6>
            <p className="mb-1">
              <small>{obj.date}</small>
            </p>
            <p className="mb-4">
              <small>{obj.description}</small>
            </p>
          </div>
        </div>
      );
    });
    return children;
  }
  render() {
    return <div>{this.createTexts()}</div>;
  }
}
