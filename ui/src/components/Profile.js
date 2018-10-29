import React, {PureComponent} from 'react'
import Flexbox from "flexbox-react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Title from "./Title";

import '../styles/profile.scss'

class Profile extends PureComponent {
  render() {
    return (
      <Flexbox className="profile">
        <Title name={"Profile"}/>
        <div className="textProfile">{this.props.profile.description}</div>
      </Flexbox>
    )
  }
}

Profile.defaultProps = {
  profile: {}
}
Profile.propsTypes = {
  profile: PropTypes.object
}

const mapStateToProps = state => ({
  profile: state.profile,
})
export default connect(mapStateToProps)(Profile)

