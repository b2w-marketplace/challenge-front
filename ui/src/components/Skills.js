import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Title from './Title'

class Skills extends PureComponent {
  render() {
    const {profile} = this.props;
    return (
      <div className="skills-container">
        <Title name={"Skills"}/>
        {(profile.skills || []).map((skill, id) => {
          const divStyle = {
            'barSize': {
              width: skill.value + '%',
              backgroundColor: '#ffffff'
            }
          }
          return (
            <div key={`${id}_${skill.name}`} className="bar-container">
              <span>{skill.name}</span>
              <div className="container-bar">
                <div className={`skills ${divStyle}`} style={divStyle}>{skill.value}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

Skills.defaultProps = {
  profile: {}
};
Skills.propsTypes = {
  profile: PropTypes.object
};

const mapStateToProps = state => ({
  profile: state.profile,
});
export default connect(mapStateToProps)(Skills)

