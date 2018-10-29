import React, {PureComponent} from 'react'
import "../styles/title.scss"

class Title extends PureComponent {
  render() {
    const {name} = this.props
    return (
      <span className="textTitle">
        {(name || "").toUpperCase()}
      </span>
    )
  }
}

export default Title
