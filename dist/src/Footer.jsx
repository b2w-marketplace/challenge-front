import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
           <div className="copyright-section">
              <div className="container-fluid">
                 <div className="row">
                    <div className="col-md-12">
                       <div className="copytext">&copy; Lucas Tavares - Front End | By: <a
                          href="https://linkedin.com/in/lucascamaraalvestavares/">My</a></div>
                    </div>
                 </div>
              </div>
           </div>
        </footer>
      </div>
    );
  }
}

export default Footer;