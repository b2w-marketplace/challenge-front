import React, { Component } from 'react';
import './App.css';
import Skill from './components/skill/Skill';
import Detail from './components/detail/Detail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {

    fetch("http://www.mocky.io/v2/5a5e38f3330000b0261923a5")
      .then(response => response.json())
      .then(response => {
        this.setState({
          user: [response]
        })
      })
  }

  render() {
    const data = this.state.user.map((user) => {
      return (
				<div className="app" key={ user.profile.name }>
					<aside className="left-column">
						<header>
							<div className="user-pic">
								<div className="user-pic-mask"></div>
								<div className="user-pic-img" style={{backgroundImage: "url(" + user.profile.image +"?raw=true)" }}></div>
							</div>
							<h1>{ user.profile.name }</h1>
							<span>{ user.profile.profession }</span>
						</header>
						<section>
							<article>
								<h2 className="title"><span>Profile</span></h2>
								<p>{ user.profile.description }</p>
							</article>
							<article>
								<h2 className="title"><span>Contact</span></h2>
								<p>
									<a href={ user.profile.contact.tel }>{ user.profile.contact.tel }</a><br/>
									<a href={ user.profile.contact.cel }>{ user.profile.contact.cel }</a>
								</p>
								<p>{ user.profile.contact.adress }</p>
								<p>
									<a href="">{ user.profile.contact.website }</a><br/>
									<a href="">{ user.profile.contact.mail }</a>
								</p>
							</article>
							<article>
								<h2 className="title"><span>Skills</span></h2>
								{
									user.profile.skills.map((skill) => {
										return (
											<Skill name={skill.name} value={skill.value}/>
										)
									})
								}
							</article>
						</section>
					</aside>
					
					<main class="right-column">
						<section>
							<h2 class="title"><span>Skills</span></h2>
							{
									user.profile.experience.map((experience) => {
										return (
											<Detail name={experience.name} date={experience.date} description={experience.description}/>
										)
									})
								}
						</section>
						<section>
							<h2 class="title"><span>Education</span></h2>
							{
									user.profile.education.map((education) => {
										return (
											<Detail name={education.name} date={education.date} description={education.description}/>
										)
									})
								}
						</section>
					</main>
				</div>
      );
    });

    return data;
  }
}

export default App;