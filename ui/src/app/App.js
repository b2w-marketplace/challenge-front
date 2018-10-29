import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {search} from "../actions/search";
import {MainScreen} from '../components'

import '../styles/styles.scss'


class App extends Component {
  constructor(props) {
    super(props);
    this.props.search()
  }

  render() {
    return (<MainScreen/>)
  }

}

App.defaultProps = {}
App.propsTypes = {
  search: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    search: () => dispatch(search())
  }
}
export default connect(null, mapDispatchToProps)(App)
