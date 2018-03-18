import React from 'react';
import MainCopy from '../MainCopy';
import './index.css';

const MainBlock = (props) => {
  return (
    <section className="main-block__wrapper">
      <h1 className="main-block__section-title">
        { props.title }
      </h1>
      
      { props.children }
    </section>
  );
}

export default MainBlock;
