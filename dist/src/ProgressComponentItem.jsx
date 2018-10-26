import React, { Component } from 'react';

export default class ProgressComponentItem extends Component {
  render() {
    let styles = {
      width: `${this.props.porcentage}%`,
      backgroundColor: this.props.color || 'white'
    }

    let title = this.props.title.toUpperCase()

    return (
      <div className="progress-item">
        <span className="progress-title">{title}</span>
        <div className="progress">
           <div style={styles} className="progress-bar" role="progressbar" aria-valuenow={this.props.porcentage} aria-valuemin="0" aria-valuemax="100">
              <span className="progress-percent"> {this.props.porcentage}%</span>
           </div>
        </div>
     </div>
    )
  } 
}