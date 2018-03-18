import React from 'react';
import './index.css';

const Contact = (props) => {
  return (
    <address className="contact__holder">
      <div className="contact__block">
        <p 
        className="contact__phone-number"
        aria-label="Phone number">
          <a 
          href={`tel:${ props.content.tel }`}
          target="_blank" 
          rel="noopener noreferrer"
          className="contact__link"
          title="Phone number">
            { props.content.tel }
          </a>
        </p>
        
        <p 
        className="contact__phone-number"
        aria-label="Mobile number">
           <a 
          href={`tel:${ props.content.cel }`}
          target="_blank" 
          rel="noopener noreferrer"
          className="contact__link"
          title="Mobile number">
            { props.content.cel }
          </a>
        </p>
      </div>

      <div className="contact__block">
        <p className="contact__address" aria-label="Current address">
          { props.content.address }
        </p>
      </div>

      <div className="contact__block">
        <a 
          href={ props.content.website } 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact__link"
          title="Website url">
          { props.content.website }
        </a>

        <a 
          href={`mailto:${ props.content.website }`}
          target="_blank" 
          rel="noopener noreferrer"
          className="contact__link"
          title="E-mail address">
          { props.content.mail }
        </a>
      </div>
    </address>
  );
}

export default Contact;
