import React from 'react';
import './Detail.css';

function Detail(props){
	return (
		<article class="detail-container" key={ props.name }>
			<h3 class="detail-role">{ props.name }</h3>
			<span class="detail-date">{ props.date }</span>
			<p>{ props.description }</p>
		</article>
	)
}

export default Detail;