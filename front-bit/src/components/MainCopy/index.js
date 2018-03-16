import React, { Component } from 'react';
import './index.css';

class MainCopy extends Component {
  render() {
    return (
      <div className="main-copy__wrapper">
        <div className="main-copy__title">
          {/* { this.props.positionTitle } */}
          UX DESIGNER @ GRAPHICS MASTERMINDS
        </div>
        <div className="main-copy__period">
          {/* { this.props.positionPeriod } */}
          January 2010 - February 2012
        </div>

        <div className="main-copy__job-description">
          {/* { this.props.positionDescription } */}
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis est sed erat condimentum condimentum. 
            Ut sit amet eleifend metus. Vivamus vitae bibendum ligula, vitae auctor mauris. 
            Nunc eget nibh ullamcorper, maximus urna quis, sodales metus. ${3 + 2}
            Vivamus porttitor magna est, nec varius nisi tempus at. Nullam ipsum mauris, tempor sed ex eu, lacinia tincidunt eros. 
            Proin fringilla nisl quis magna tempor congue. Nulla gravida tortor eget urna volutpat, luctus placerat augue tempor. 
            Praesent viverra nisi eget velit auctor commodo. `}
          </p>
        </div>
      </div>
    );
  }
}

export default MainCopy;
