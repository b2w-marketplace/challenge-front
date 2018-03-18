import React, { Component } from 'react';
import SidebarBlock from './components/SidebarBlock';
import SidebarSummary from './components/SidebarSummary';
import MainBlock from './components/MainBlock';
import MainCopy from './components/MainCopy';
import Contact from './components/Contact';
import SkillBar from './components/SkillBar';
import Loader from './components/Loader';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      summary: {},
      description: '',
      contactInfo: {},
      skills: [],
      experience: [],
      education: [],
      loading: true
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      fetch('http://www.mocky.io/v2/5aad2b482f00006000204942')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        this.setState(
          {
            summary: {
              name: data.profile.name,
              image: data.profile.image,
              profession: data.profile.profession
            },
            description: data.profile.description,
            contactInfo:  data.profile.contact,
            skills:  data.profile.skills,
            experience:  data.profile.experience,
            education:  data.profile.education,
            loading: false
          }
        );
      })
    }, 2000);
  }

  renderBlocks = (blockContent) => {
    return blockContent.map((content, index) => 
      <MainCopy 
        key={`copy_${content.name}_${index}`} 
        name={content.name} 
        date={content.date} 
        description={content.description} 
      /> 
    )
  }

  renderSkills = (content) => {
    return content.map((content, index) => 
      <SkillBar 
        key={`copy_${content.name}_${index}`} 
        name={content.name} 
        value={content.value} 
      /> 
    )
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="sidebar__holder">
            <SidebarSummary content={this.state.summary} />
            
            <SidebarBlock title="Profile"> 
              {this.state.loading ? <Loader /> : this.state.description}
            </SidebarBlock>

            <SidebarBlock title="Contact"> 
              {this.state.loading ? <Loader /> : <Contact content={this.state.contactInfo}/>}
            </SidebarBlock>

            <SidebarBlock title="Skills"> 
              {this.state.loading ? <Loader /> : this.renderSkills(this.state.skills)}
            </SidebarBlock>
          </div>
        </div>

        <main className="main">
          <div className="main__holder">
            <MainBlock title="Experience">
              {this.state.loading ? <Loader /> : this.renderBlocks(this.state.experience)}
            </MainBlock>

            <MainBlock title="Education">
            {this.state.loading ? <Loader /> : this.renderBlocks(this.state.education)}
            </MainBlock>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
