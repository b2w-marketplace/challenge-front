import React, { Component } from 'react';

import InfoSection from './InfoSection'

class WorkExperiences extends Component {
  render() {
    const educations = this.props.educations || []

    return (
      <InfoSection data={educations} sectionTitle={'Education Experiences'} />
    );
  }
}

export default WorkExperiences;