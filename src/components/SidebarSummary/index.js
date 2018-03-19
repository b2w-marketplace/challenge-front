import React from 'react';
import './index.css';

const SidebarSummary = (props) => {

  return (
    <div className="summary__wrapper">
      <div className="summary__image">
        <div className="summary__image-holder">
          <div 
            className="summary__image-content" 
            style={{ backgroundImage: `url( ${ props.content.image } )` }}>
          </div>
        </div>
      </div>
      <div className="summary__user-info">
        <h1 className="summary__user-name">
          { props.content.name }
        </h1>
        <p className="summary__user-profession">
          { props.content.profession }
        </p>
      </div>
    </div>
  );
}

export default SidebarSummary;
