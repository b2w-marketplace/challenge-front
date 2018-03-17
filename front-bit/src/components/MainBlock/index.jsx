import React, { Component } from 'react';
import MainCopy from '../MainCopy';
import './index.css';

class MainBlock extends Component {

  render() {
    return (
      <section className="main-block__wrapper">
        <h1 className="main-block__section-title">
          {this.props.title}
        </h1>
        
        {this.props.children}
      </section>
    );
  }
}

export default MainBlock;