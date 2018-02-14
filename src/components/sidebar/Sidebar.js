import React from 'react';
import Profile from '../profile/Profile';
import './Sidebar.css';

const changePages = () => {
	const content = document.querySelector('.content'),
		  sidebar = document.querySelector('.sidebar');

	sidebar.classList.add('isInvisible');
	content.classList.remove('isInvisible');
	content.classList.add('isVisible');
}

const Sidebar = (props) => {
	return (
		<aside className="sidebar">
			<i onClick={ changePages } className="fas fa-exchange-alt"></i>
			<Profile userInfos={ props.profile }/>
		</aside>
	)
}

export default Sidebar;