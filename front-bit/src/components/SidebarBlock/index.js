import React, { Component } from 'react';
import './index.css';

class SidebarBlock extends Component {
  render() {
    return (
      <div className="sidebar-block__wrapper">
        <h3 className="sidebar-block__section-title">
          {this.props.title}
        </h3>

        {this.props.children}
      </div>
    );
  }
}

export default SidebarBlock;