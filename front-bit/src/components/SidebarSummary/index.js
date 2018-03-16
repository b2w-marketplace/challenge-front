import React, { Component } from 'react';
import './index.css';

class SidebarSummary extends Component {
  render() {
    return (
      <div className="summary__wrapper">
        <div className="summary__image-holder">
          <div className="summary__image-content">
            <img src="http://via.placeholder.com/350x350" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarSummary;