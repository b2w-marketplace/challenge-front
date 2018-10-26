import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProfileSkills from './ProfileSkills'
import ProfileHeader from './ProfileHeader'
import WorkExperiences from './WorkExperiences'
import Education from './Education'
import Footer from './Footer'

class App extends Component {
  constructor(args) {
    super(args)
    this.state = {
      profile: {
        name: 'Carregando...'
      }
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    var self = this

    fetch('https://api.myjson.com/bins/cl2wk').then((data) => (
      data.json()      
    )).then((json) => {
      this.setState({ profile: json.profile })
    })
  }

  render() {
    return (
      <div className="App">
        <div id="main-wrapper">
          <div className="columns-block container">
             <div className="left-col-block blocks">
                <header className="header theiaStickySidebar">
                   <div className="content">
                      <ProfileHeader profileData={this.state.profile}/>
                      <ProfileSkills skills={this.state.profile.skills || []} />
                   </div>
                </header>
             </div>
             <div className="right-col-block blocks">
                <div className="theiaStickySidebar">
                   <section className="section-wrapper section-interest gray-bg">
                      <div className="container-fluid">
                         <WorkExperiences experiences={this.state.profile.experience}/>
                         <Education educations={this.state.profile.education}/>
                      </div>
                   </section>
                   <Footer />
                </div>
             </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
