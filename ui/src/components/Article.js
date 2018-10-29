import React, {PureComponent} from 'react'
import ExperienceItem from "./ExperienceItem"
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";

class Article extends PureComponent {
  render() {
    const {profile} = this.props;
    return (
      <div className="body-container">
        <span className="title-experience"> WORK EXPERIENCE</span>
        <div className="body-experience">
          {((profile || {}).experience || []).map((experience, id) =>
            <ExperienceItem key={`${id}_${experience.name}`} experience={experience}/>
          )}
        </div>
        <span className="title-experience">EDUCATION</span>
        <div className="body-experience">
          {((profile || {}).education || []).map((experience, id) =>
            <ExperienceItem key={`${id}_${experience.name}`} experience={experience}/>
          )}
        </div>
      </div>
    )
  }
}

Article.defaultProps = {
  profile: {}
};
Article.propsTypes = {
  profile: PropTypes.object
};

const mapStateToProps = state => ({
  profile: state.profile,
});
export default connect(mapStateToProps)(Article)


