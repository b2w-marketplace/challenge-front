import React, {PureComponent} from 'react'
import ExperienceItem from './ExperienceItem'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'

class Article extends PureComponent {
  render() {
    const {profile} = this.props
    return (
      <div className="body-container">
        <div>
          <p> WORK EXPERIENCE</p>
          <span>
          {((profile || {}).experience || []).map((experience, id) =>
            <ExperienceItem key={`${id}_${experience.name}`} experience={experience}/>
          )}
        </span>
        </div>
        <div>
          <p>EDUCATION</p>
          <div>
            {((profile || {}).education || []).map((experience, id) =>
              <ExperienceItem key={`${id}_${experience.name}`} experience={experience}/>
            )}
          </div>
        </div>
      </div>
    )
  }
}

Article.defaultProps = {
  profile: {}
}
Article.propsTypes = {
  profile: PropTypes.object
}

const mapStateToProps = state => ({
  profile: state.profile
})
export default connect(mapStateToProps)(Article)


