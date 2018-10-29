import React, {PureComponent} from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Title from "./Title";

import '../styles/contact.scss'

class Contact extends PureComponent {
  render() {
    const {profile} = this.props
    let address = ((profile.contact || {}).address || "").split(".") || ["", ""]
    return (
      <div className="contact">
        <Title name={"Contact"}/>
        <div className="separator">
          <span>{(profile.contact || {}).tel}</span>
          <span>{(profile.contact || {}).cel}</span>
        </div>
        <div className="separator">
          <span>{`${address[0]}.`}</span>
          <span>{address[1]}</span>
        </div>
        <div className="separator">
          <span>{(profile.contact || {}).website}</span>
          <span>{(profile.contact || {}).mail}</span>
        </div>
      </div>
    )
  }
}

Contact.defaultProps = {
  profile: {}
}
Contact.propsTypes = {
  profile: PropTypes.object
}

const mapStateToProps = state => ({
  profile: state.profile,
})
export default connect(mapStateToProps)(Contact)

