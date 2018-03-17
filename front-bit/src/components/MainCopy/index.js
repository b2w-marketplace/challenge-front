import React, { Component } from 'react';
import './index.css';

class MainCopy extends Component {

  render() {
    return (
      <div className="main-copy__wrapper">
        <div className="main-copy__title">
          { this.props.name }
        </div>
        <div className="main-copy__period">
          { this.props.date }
        </div>

        <div className="main-copy__job-description">
          { this.props.description }
        </div>
      </div>
    );
  }
}

export default MainCopy;
