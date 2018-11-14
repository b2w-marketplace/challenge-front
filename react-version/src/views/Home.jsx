import React, { Component } from "react";
import CandidateComposition from "../components/CandidateComposition";
import CandidateProfile from "../components/CandidateProfile";
import CandidateContact from "../components/CandidateContact";
import CandidateSkills from "../components/CandidateSkills";
import CandidateExplanation from "../components/CandidateExplanation";

import axios from "axios";

class Home extends Component {
  state = {
    dataComposition: {}
  };

  componentWillMount() {
    axios
      .get("http://www.mocky.io/v2/5a5e38f3330000b0261923a5")
      .then(res => res.data.profile)
      .then(data => {
        const candidate = {
          image: data.image,
          name: data.name,
          profession: data.profession
        };

        const dataComposition = {
          candidateProfile: candidate,
          descriptionProfile: data.description,
          contactProfile: data.contact,
          skillsProfile: data.skills,
          experienceProfile: data.experience,
          educationProfile: data.education
        };
        this.setState(dataComposition);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 bg-dark py-5">
            <CandidateComposition candidate={this.state.candidateProfile} />
            <CandidateProfile description={this.state.descriptionProfile} />
            <CandidateContact contact={this.state.contactProfile} />
            <CandidateSkills skills={this.state.skillsProfile} />
          </div>
          <div className="col-12 col-md-7 py-5">
            <CandidateExplanation
              array={this.state.experienceProfile}
              expTitle="Work Experience"
            />
            <CandidateExplanation
              array={this.state.educationProfile}
              expTitle="Education"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
