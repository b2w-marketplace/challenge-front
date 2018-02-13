import React, { Component } from 'react';
import './css/main.css';
import $ from 'jquery';


class App extends Component {	
	constructor() {
		super();
		this.state = {listProfile:[], listSkills:[], listAbout:[], listContact: [], listExperience:[], listEducation:[] };
		
	}
	componentDidMount(){
		$.ajax({
			url:'http://www.mocky.io/v2/5a5e38f3330000b0261923a5',
			dataType: 'json',
			success:function(resposta){
				this.setState({ listProfile: this.state.listProfile.concat(resposta.profile),
				listSkills: this.state.listSkills.concat(resposta.profile.skills),			
				listAbout: this.state.listAbout.concat(resposta.profile.description),
				listContact: this.state.listContact.concat(resposta.profile.contact),
				listExperience: this.state.listExperience.concat(resposta.profile.experience),
				listEducation: this.state.listEducation.concat(resposta.profile.education)});
			}.bind(this)
		});
	}
	render() {
		return (
			
		<div id="layout">
			<div id="menu">
			{
				this.state.listProfile.map(function(perfil, menu){
				return (
					<div key={menu} className="header">
						<div className="image-header">
							<div className="moldura-image"></div>
							<figure>
								<img src='https://raw.githubusercontent.com/felipealvesc/fac/master/img/felipe-alves.jpg' alt=""/>
							</figure>
							
						</div>
						<ul className="sidebar-header">
							<li className="nome">{perfil.name}</li>
							<li className="profissao">{perfil.profession}</li>							
						</ul>
					</div>
					);
				})
			}
			<div className="title-sidebar">profile</div>
			{
				this.state.listProfile.map(function(perfil, sid){
				return (
					<ul key={sid} className="sidebar">				
						<li className="sobre">{perfil.description}</li>
					</ul>
					);
				})
			}
			<div className="title-sidebar">contact</div>
			{
				this.state.listContact.map(function(contato, cont){
				return (
					<ul key={cont} className="sidebar">
						<li className="contatos">{contato.tel}</li>
						<li className="contatos-final">{contato.cel}</li>				
						<li className="contatos-final">{contato.address}</li>
						<li className="contatos">{contato.website}</li>
						<li className="contatos">{contato.mail}</li>
					</ul>	
					);
				})
			}
			<div className="title-sidebar">skills</div>
			{
				this.state.listSkills.map(function(habilidade, hab){
				return (
					<ul key={hab}  className="sidebar-habilidades">											
						<li className={"habilidade-" + habilidade.value.replace('%', '')}>
							<h2>{habilidade.name}
							<div className="barra"><span></span></div>
							</h2>
						</li>
					</ul>
					);
				})
			}
			</div>
			<div id="main">
				<h2 className="main-title">work experience</h2>					
				{
					this.state.listExperience.map(function(experiencia, exp){
					return (
						<ul key={exp} className="main-atividades">
							<li className="title-atividade">{experiencia.name}</li>
							<li className="data-atividade">{experiencia.date}</li>
							<li className="texto-atividade">{experiencia.description}</li>
						</ul>
						
						);
					})
				}
				<h2 className="main-title">education</h2>
				{
					this.state.listEducation.map(function(educacao, edu){		
					return (			
						<ul key={edu} className="main-atividades">						
							<li className="title-atividade">{educacao.name}</li>
							<li className="data-atividade">{educacao.date}</li>
							<li className="texto-atividade">{educacao.description}</li>
						</ul>
						
						);
					})
				}	
			</div>

		</div>   	
		);
	}
}

export default App;

