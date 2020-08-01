import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Presentation from "./Presentation/Presentation";
import Profile from "./Profile/Profile";
import Experience from "./Experience/Experience";

const App = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `http://www.mocky.io/v2/5a5e38f3330000b0261923a5`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then(({ profile }) => {
        setProfile(profile);
        setLoading(false);
      });
  }, []);

  const {
    image,
    name,
    profession,
    description,
    contact,
    skills,
    experience,
    education,
  } = profile;

  return loading ? (
    "Carregando"
  ) : (
    <div className="resume">
      <Presentation image={image} name={name} profession={profession} />
      <Experience experience={experience} education={education} />
      <Profile description={description} contact={contact} skills={skills} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
