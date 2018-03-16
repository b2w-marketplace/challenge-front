import React, { Component } from 'react';
import SidebarBlock from '../SidebarBlock';
import SidebarSummary from '../SidebarSummary';
import './index.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarSummary />
        <SidebarBlock />
      </div>
    );
  }
}

export default Sidebar;