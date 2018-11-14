import React, { Component } from "react";
import "../styles/skill-avatar.css";

export default class SkillAvatar extends Component {
  url() {
    return this.props.image
      .replace("https://github.com", "https://raw.githubusercontent.com")
      .replace("blob/", "");
  }

  render() {
    const bgImage = {
      background: `url(${this.url()}) center center no-repeat`
    };
    return (
      <div className="row">
        <div className="col">
          <div className="avatar-block">
            <div className="avatar-img" style={bgImage} />
            <div className="moudure" />
          </div>
        </div>
      </div>
    );
  }
}
