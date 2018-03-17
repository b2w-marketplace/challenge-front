import React, { Component } from 'react';
import './index.css';

const Loader = () => (
  <div className="loader__wrapper">
    <div className="loader__element loader__element--one"></div>
    <div className="loader__element loader__element--two"></div>
    <div className="loader__element loader__element--three"></div>
  </div>
);

export default Loader;