import React, { Component } from 'react';
import './portfolio.scss'
import { connect } from 'react-redux';
import { loadPortfolio } from "../../config/store/actions/portfolioActions";
import Avatar from '../../config/assets/images/avatar-dev.png';

class Portfolio extends Component {

    componentDidMount() {
        this.props.loadPortfolio();
    }

    render() {
        return (
                <div>
                    {
                        this.props.profile.list.map((list, key) =>
                            <div key={key} className="container-portfolio">
                                <div className="row">
                                    <div className="grid-left col-md-4">
                                        <div className="container">
                                            <div className="header-about">
                                                <div className="avatar">
                                                    <img src={Avatar} alt="Avatar Developer"/>
                                                </div>
                                                <h1 className="title">{list.profile.name}</h1>
                                                <div className="profession">
                                                    {list.profile.profession}
                                                </div>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="content-about">
                                                <div className="description">
                                                    <h2>Profile</h2>
                                                    <p>{list.profile.description}</p>
                                                </div>
                                                <div className="contact">
                                                    <h2>Contact</h2>
                                                    <p>{list.profile.contact.tel}</p>
                                                    <p>{list.profile.contact.cel}</p>
                                                    <div className="address">
                                                        <p>{list.profile.contact.address}</p>
                                                    </div>
                                                    <div className="mail">
                                                        <p>{list.profile.contact.website}</p>
                                                        <p>{list.profile.contact.mail}</p>
                                                    </div>
                                                </div>
                                                <div className="skills">
                                                    <h2>Skills</h2>
                                                    {
                                                        list.profile.skills.map((skills, id) =>
                                                            <div key={id} className="skill-bar">
                                                                <h3>{skills.name}</h3>
                                                                <div className="bar">
                                                                    <div style={{ width: skills.value }} className="percent"></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-right col-md-8">
                                        <div className="container">
                                            <div className="content-experience">
                                                <h2>Work experience</h2>
                                                {
                                                    list.profile.experience.map((experience, e) =>
                                                        <div key={e} className="experience">
                                                            <h3>{experience.name}</h3>
                                                            <span className="date">
                                                                {experience.date}
                                                            </span>
                                                            <p>
                                                                {experience.description}
                                                            </p>
                                                        </div>
                                                    )
                                                }
                                                <h2>Education</h2>
                                                {
                                                    list.profile.education.map((education, ed) =>
                                                        <div key={ed} className="education">
                                                            <h3>{education.name}</h3>
                                                            <span className="date">
                                                                {education.date}
                                                            </span>
                                                            <p>
                                                                {education.description}
                                                            </p>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.portfolio
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPortfolio: (profile) => {
            dispatch(loadPortfolio(profile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);