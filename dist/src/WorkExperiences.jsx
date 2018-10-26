import React, { Component } from 'react';

import InfoSection from './InfoSection'

class WorkExperiences extends Component {
  render() {
    const experiences = this.props.experiences || []

    return (
      <InfoSection data={experiences} sectionTitle={'Work Experiences'} />
    );
  }
}

export default WorkExperiences;