import React, {PureComponent} from 'react'
import Header from "./Header";
import Profile from "./Profile";
import Skills from "./Skills";
import Contact from "./Contact";

class Nav extends PureComponent {
  render() {
    return (
      <div className="container-header">
        <Header/>
        <div className="nav-body">
          <Profile/>
          <Contact/>
          <Skills/>
        </div>
      </div>
    )
  }
}

export default Nav
