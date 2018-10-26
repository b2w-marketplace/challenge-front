import React, { Component } from 'react';

import ProgressComponentItem from './ProgressComponentItem'


class ProfileSkills extends Component {
  render() {
    const skills = this.props.skills || []

    return (
      <div>
        <div className="row">
         <div className="col-md-12">
            <div className="section-title">
               <h2 className="ct">SKILLS</h2>
               <hr className="hr1"/>
            </div>
         </div>
        </div>
        <div className="row">
           <div className="col-md-12">
              <div className="progress-wrapper">
               {skills.map((skill, index) => {
                  return <ProgressComponentItem
                            key={index}
                            title={skill.name}
                            porcentage={parseInt(skill.value)}
                            color={skill.color}  
                          />
               })}
              </div>
           </div>
        </div>
    </div>
    );
  }
}

export default ProfileSkills;
