import React, { Component } from 'react';

class ProfileHeader extends Component {
  render() {
    const profileData = this.props.profileData
    profileData.contact = profileData.contact || {}

    return (
      <div>
        <div className="profile-img">
           <img src={profileData.image} className="img-responsive"/>
        </div>

        <div className="row">
           <div className="col-md-12">
              <div className="section-title">
                 <h1>{profileData.name}</h1>
                 <span className="lead">{profileData.profession}</span>
                 <hr className=""/>
              </div>
           </div>
        </div>
        <div className="about-text">
           <h2>PROFILE</h2>
           <hr className="hr1"/>
           <p>{profileData.description}</p>
           <h2>CONTACT</h2>
           <hr className="hr1"/>
           <p>{profileData.contact.tel}</p>
           <p>{profileData.contact.cel}</p>
           <p>{profileData.contact.address}</p>
           <p>{profileData.contact.website}</p>
           <p>{profileData.contact.mail}</p>
        </div>
    </div>
    );
  }
}

export default ProfileHeader;


