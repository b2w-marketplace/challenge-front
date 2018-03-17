import React, { Component } from 'react';
import './index.css';

class Contact extends Component {
  render() {
    return (
      <address className="contact__holder">
        <div className="contact__block">
          <p 
          className="contact__phone-number"
          aria-label="Phone number">{this.props.content.tel}</p>

          <p 
          className="contact__phone-number"
          aria-label="Mobile number">{this.props.content.tel}</p>
        </div>

        <div className="contact__block">
          <p className="contact__address" aria-label="Current address">
            {this.props.content.address}
          </p>
        </div>

        <div className="contact__block">
          <a 
            href={this.props.content.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact__link"
            title="Website url">
            {this.props.content.website}
          </a>

          <a 
            href={`mailto:${this.props.content.website}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="contact__link"
            title="E-mail address">
            {this.props.content.mail}
          </a>
        </div>
      </address>
    );
  }
}

export default Contact;