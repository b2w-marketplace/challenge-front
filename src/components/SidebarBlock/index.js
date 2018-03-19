import React from 'react';
import './index.css';

const SidebarBlock = (props) => {
  return (
    <div className="sidebar-block__wrapper">
      <h3 className="sidebar-block__section-title">
        { props.title }
      </h3>

      { props.children }
    </div>
  );
}

export default SidebarBlock;
