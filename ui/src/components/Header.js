import React, {Component} from 'react'
import Flexbox from "flexbox-react"
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import avatar from '../../../files/avatar-dev.png'
import "../styles/nav.scss"

class Header extends Component {

  render() {
    console.log(this.props)
    const {profile, image} = this.props
    return (
      <div className="header">
        <img src={avatar} alt="avatar" title="avatar" className="image-header"/>
        <span className="header-name">{(profile.name || "").toUpperCase()}</span>
        <span className="header-job-name">{(profile.profession || "").toUpperCase()}</span>
      </div>
    )
  }
}

Header.defaultProps = {
  profile: {}
}
Header.propsTypes = {
  profile: PropTypes.object
}

const mapStateToProps = state => ({
  profile: state.profile,
  image: state.image.image
})
export default connect(mapStateToProps)(Header)



