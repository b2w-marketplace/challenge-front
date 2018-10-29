import React, {Component} from 'react'
import Flexbox from 'flexbox-react'

import Nav from './Nav'
import Article from './Article'


class MainScreen extends Component {
  render() {
    return (
      <Flexbox flexDirection="row">
        <Nav/>
        <Article/>
      </Flexbox>
    )
  }
}

export default MainScreen
