import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import MainBlock from './components/MainBlock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar>
          ois
        </Sidebar>
        <Main>
          <MainBlock />
        </Main>
      </div>
    );
  }
}

export default App;
