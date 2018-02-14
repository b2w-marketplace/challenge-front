import React, { Component } from 'react';
import Card from '../card/Card';
import './Content.css';

class Content extends Component {
	render() {
		const userExperiences = this.props.content.experience;
		const userEducations = this.props.content.education;

		const changePages = () => {
			const content = document.querySelector('.content'),
				  sidebar = document.querySelector('.sidebar');

			sidebar.classList.add('isVisible');
			sidebar.classList.remove('isInvisible');
			content.classList.add('isInvisible');
		}

		return (
			<div className="content">
				<i onClick={ changePages } className="fas fa-exchange-alt"></i>
				<section className="section">
					<h1>Work Experience</h1>
					{
						userExperiences.map((experience, index) => {
							return (
								<Card 
									key={ index } 
									name={ experience.name }
									date={ experience.date }
									description={ experience.description }/>
							)
						})
					}
				</section>

				<section className="section">
					<h1>Education</h1>
					{
						userEducations.map((education, index) => {
							return (
								<Card 
									key={ index } 
									name={ education.name }
									date={ education.date }
									description={ education.description }/>
							)
						})
					}
				</section>
			</div>
		)
	}
}

export default Content;