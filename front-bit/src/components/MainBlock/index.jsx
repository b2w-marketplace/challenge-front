import React, { Component } from 'react';
import MainCopy from '../MainCopy';
import './index.css';

class MainBlock extends Component {
  render() {
    return (
      <div className="main-block__wrapper">
        
        <h1 className="main-block__section-title">Work Experience</h1>
        <MainCopy />
        <MainCopy />
        <MainCopy />
      </div>
    );
  }
}

export default MainBlock;