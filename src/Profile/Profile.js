import React from "react";

const Profile = ({ description, contact, skills }) => {
  return (
    <div className="resume__profile">
      <div className="wrapper">
        <h1 className="title">
          Profile
          <hr className="divider divider--profile" />
        </h1>
        <p className="content">{description}</p>
      </div>
      <div className="wrapper">
        <h1 className="title">
          Contact
          <hr className="divider divider--profile" />
        </h1>

        <div className="phones">
          <p className="content">{contact.tel}</p>
          <p className="content">{contact.cel}</p>
        </div>
        <div className="address">
          <p className="content">{contact.address}</p>
        </div>
        <div className="social">
          <p className="content">{contact.website}</p>
          <p className="content">{contact.mail}</p>
        </div>
      </div>
      <div className="wrapper">
        <h1 className="title">
          Skills
          <hr className="divider divider--profile" />
        </h1>
        {skills.map((skill) => {
          return (
            <div key={skill.name}>
              <p className="skill-name">{skill.name}</p>
              <div className="skill-bar">
                <div className="loaded" style={{ width: skill.value }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
