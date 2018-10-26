import React, { Component } from 'react';

class InfoSection extends Component {
  render() {
    const data = this.props.data || []

    return (
      <div>
         <div className="row">
            <div className="col-md-12">
               <div className="section-title">
                  <h2>{this.props.sectionTitle.toString().toUpperCase()}</h2>
                  <hr className="hrt"/>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
               {data.map((element, index) => {
                 return (
                    <div className="content-item">
                       <h2>{element.name}</h2>
                       <h3>{element.date}</h3>
                       <p>{element.description}</p>
                    </div>

                 )
               })}
            </div>
         </div>
      </div>
    );
  }
}

export default InfoSection;
