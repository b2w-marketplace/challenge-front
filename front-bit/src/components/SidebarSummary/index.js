import React, { Component } from 'react';
import './index.css';

class SidebarSummary extends Component {
  constructor(props) {
    super(props);
  }

  renderImage = () => {
    let imageUrl = this.props.content.image;
    
    // Quite ugly fix to get the correct image url without changing the mock data
    return imageUrl.replace(/github.com/i, 'raw.githubusercontent.com').replace(/blob\//i, '');
  }

  render() {

    return (
      <div className="summary__wrapper">
        <div className="summary__image">
          <div className="summary__image-holder">
            <div 
              className="summary__image-content" 
              style={{ backgroundImage: `url( ${this.props.content.image} )` }}>
            </div>
          </div>
        </div>
        <div className="summary__user-info">
          <div className="summary__user-name">
            { this.props.content.name }
          </div>
          <div className="summary__user-profession">
            { this.props.content.profession }
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarSummary;
