import React from "react";

const Experience = ({ experience, education }) => {
  const createExperience = (arr) =>
    arr.map((e) => {
      return (
        <div key={e.name} className="experience">
          <h1 className="experience__name">{e.name}</h1>
          <p className="experience__date">{e.date}</p>
          <p className="experience__description">{e.description}</p>
        </div>
      );
    });

  return (
    <div className="resume__experience">
      <div className="work-experience">
        <h1 className="title">
          Work Experience
          <hr className="divider divider--experience" />
        </h1>
        {createExperience(experience)}
      </div>
      <div className="education">
        <h1 className="title">
          Education
          <hr className="divider divider--experience" />
        </h1>
        {createExperience(education)}
      </div>
    </div>
  );
};

export default Experience;
