import React, {Component} from 'react'

import Nav from './Nav'
import Article from './Article'


class MainScreen extends Component {
  render() {
    return (
      <div className="page-container">
        <Nav/>
        <Article/>
      </div>
    )
  }
}

export default MainScreen
