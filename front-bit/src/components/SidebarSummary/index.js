import React, { Component } from 'react';
import './index.css';

class SidebarSummary extends Component {
  render() {
    return (
      <div className="summary__wrapper">
        <div className="summary__image-holder">
          <div className="summary__image-content"></div>
        </div>
        <div className="summary__user-info">
          <div className="summary__user-name">
            {this.props.content.name}
          </div>
          <div className="summary__user-profession">
            {this.props.content.profession}
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarSummary;