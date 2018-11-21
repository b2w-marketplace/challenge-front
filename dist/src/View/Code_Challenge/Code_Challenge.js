import React, {Component} from 'react';
import axios from 'axios';
import './Code_Challenge.scss'

const api = axios.create({
    baseURL: 'http://www.mocky.io/v2',
});

class Code_Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = {dataApi: null};
    }

    _getData = async () => {
        try {
            let data = await api.get('/5a5e38f3330000b0261923a5');
            this.setState({
                dataApi: data
            })
        } catch (error) {
            console.error(error);
        }
    };

    componentWillMount() {
        this._getData()
    }

    render() {
        let dataProfile = this.state.dataApi;
        if (dataProfile === null) {
            return null
        }
        dataProfile = dataProfile.data.profile;

        return (
            <div className='page'>
                <div className="page-left">
                    <div className="page-header">
                        <div className="page-header-profile">
                            <div className="page-header-divImageBorder">
                                <div className="page-header-divImage">
                                    <div className="header-profile-image-yourImage">
                                        Your Image
                                    </div>

                                    {/*A imagem do github nao esta renderizando*/}
                                    {/*<img className="header-profile-image" src={dataProfile.image} title={dataProfile.name}/>*/}
                                </div>
                            </div>
                            <div className="page-header-name">
                                {dataProfile.name}
                            </div>
                        </div>
                        <div className="page-header-profession">
                            {dataProfile.profession}
                        </div>
                    </div>
                    <hr className="page-header-hr"/>
                    <div className="page-slidebar">
                        <div className="page-slidebarBlock profile">
                            <div className="page-slidebarBlock-tittle">
                                Profile
                            </div>
                            <div className="page-slidebarBlock-profile">
                                {dataProfile.description}
                            </div>
                        </div>
                        <div className="auxFlex">
                            <div className="page-slidebarBlock contact">
                                <div className="page-slidebarBlock-tittle">
                                    Contact
                                </div>
                                <div className="page-slidebarBlock-contact phone">
                                    {dataProfile.contact.tel}<br/>
                                    {dataProfile.contact.cel}
                                </div>
                                <div className="page-slidebarBlock-contact">
                                    {dataProfile.contact.address}
                                </div>
                                <div className="page-slidebarBlock-contact">
                                    {dataProfile.contact.website}<br/>
                                    {dataProfile.contact.mail}
                                </div>
                            </div>
                            <div className="page-slidebarBlock skills">
                                <div className="page-slidebarBlock-tittle">
                                    Skills
                                </div>
                                {dataProfile.skills.map(skill => {
                                    return <div className="page-slidebarBlock-skills">
                                        <div className="skills-tittle">{skill.name}</div>
                                        <div className="skills-Border">
                                            <div className="skills-background" style={{width: skill.value}}/>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-right">
                    <div className="page-right-information workExperience">
                        <div className="information-divTittle">Work Experience</div>
                        {dataProfile.experience.map(experience => {
                            return <div className="information-block">
                                <div className="information-block-tittle">
                                    {experience.name}
                                </div>
                                <div className="information-block-date">
                                    {experience.date}
                                </div>
                                <p className="information-block-description">
                                    {experience.description}
                                </p>
                            </div>
                        })}

                    </div>
                    <div className="page-right-information education">
                        <div className="information-divTittle">Education</div>
                        {dataProfile.education.map(education => {
                            return <div className="information-block">
                                <div className="information-block-tittle">
                                    {education.name}
                                </div>
                                <div className="information-block-date">
                                    {education.date}
                                </div>
                                <p className="information-block-description">
                                    {education.description}
                                </p>
                            </div>
                        })}
                    </div>

                </div>
            </div>
        );
    }
}

export default Code_Challenge;