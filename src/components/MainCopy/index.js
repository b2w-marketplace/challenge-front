import React from 'react';
import './index.css';

const MainCopy = (props) => {
  return (
    <div className="main-copy__wrapper">
      <div className="main-copy__title">
        { props.name }
      </div>
      <div className="main-copy__period">
        { props.date }
      </div>

      <div className="main-copy__job-description">
        { props.description }
      </div>
    </div>
  );
}

export default MainCopy;
