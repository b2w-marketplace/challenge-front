import React, { Component } from "react";
import GridLeft from "./GridLeft";
import SkillTitle from "./SkillTitle";

import "../styles/candidate-contact.css";

export default class CandidateContact extends Component {
  componentDidUpdate() {
    this.tel = `tel:${this.props.contact.tel}`;
    this.cel = `tel:${this.props.contact.cel}`;
    this.mailto = `mailto:${this.props.contact.mail}`;
  }

  tel = ``;
  cel = ``;
  mailto = ``;

  render() {
    return (
      <GridLeft>
        <SkillTitle skillTitle="Contact" />
        {this.props.contact ? (
          <div className="contact">
            <p className="mb-0">
              <small>
                <a className="text-white" href={this.tel}>
                  {this.props.contact.tel}
                </a>
              </small>
            </p>
            <p>
              <small>
                <a className="text-white" href={this.cel}>
                  {this.props.contact.cel}
                </a>
              </small>
            </p>
            <p>
              <small>{this.props.contact.address}</small>
            </p>
            <p className="mb-0">
              <small>
                <a className="text-white" href={this.props.contact.website}>
                  {this.props.contact.website}
                </a>
              </small>
            </p>
            <p className="mb-1">
              <small>
                <a className="text-white" href={this.mailto}>
                  {this.props.contact.mail}
                </a>
              </small>
            </p>
          </div>
        ) : null}
      </GridLeft>
    );
  }
}
