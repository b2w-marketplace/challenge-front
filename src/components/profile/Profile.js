import React, { Component } from 'react';
import './Profile.css';
import avatar from './avatar-dev.png';

class Profile extends Component {
	render() {
		const user = this.props.userInfos;

		return (
			<div className="profile">
				<figure className="profile_avatar">
					<img src={ avatar } alt="Avatar"/>
				</figure>
				<div className="profile_details">
					<h1>{ user.name }</h1>
					<h4>{ user.profession }</h4>
				</div>

				<div className="profile_section">
					<h2>Profile</h2>
					<p>{ user.description }</p>
				</div>

				<div className="profile_section">
					<h2>Contact</h2>
					<div className="profile_phone">
						<p>{ user.contact.tel }</p>
						<p>{ user.contact.cel }</p>
					</div>
					<div className="profile_address">
						<p>{ user.contact.address }</p>
					</div>
					<div className="profile_contact">
						<p>{ user.contact.website }</p>
						<p>{ user.contact.mail }</p>
					</div>
				</div>

				<div className="profile_section">
					<h2>Skills</h2>
					{
						user.skills.map((skill, index) => {
							return (
								<div className="skill" key={ index }>
									<p className="skill_name">{ skill.name }</p>
									<div className="skill_bar">
										<span className="skill_value" style={{ width: skill.value }}></span>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		);
	}
}

export default Profile;