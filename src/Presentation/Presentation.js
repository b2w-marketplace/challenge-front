import React from "react";

const Presentation = ({ image, name, profession }) => {
  return (
    <div className="resume__presentation">
      <div className="image-wrapper">
        <img className="image" src={image} alt="Your image" />
      </div>
      <div className="text-wrapper">
        <h1 className="name">{name}</h1>
        <p className="profession">{profession}</p>
        <hr className="divider divider--presentation" />
      </div>
    </div>
  );
};

export default Presentation;
