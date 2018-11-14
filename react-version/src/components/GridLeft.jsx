import React, { Component } from "react";

export default class GridLeft extends Component {
  render() {
    return (
      <div className="row text-white text-center px-1 px-md-5 pt-5 pb-0">
        <div className="col-12">{this.props.children}</div>
      </div>
    );
  }
}
