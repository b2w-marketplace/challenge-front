import React, {PureComponent} from 'react'

class ExperienceItem extends PureComponent {
  render() {
    const {experience} = this.props
    return (
      <div className="experienceWrap">
        <span className="name-experience">{(experience.name || "").toUpperCase()}</span>
        <span className="date-experience">{experience.date}</span>
        <span className="description-experience">{experience.description}</span>
      </div>
    )
  }
}

export default ExperienceItem
