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
        <div className="summary__user-name">
          { props.content.name }
        </div>
        <div className="summary__user-profession">
          { props.content.profession }
        </div>
      </div>
    </div>
  );
}

export default SidebarSummary;
