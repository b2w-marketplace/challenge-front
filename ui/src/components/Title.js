import React, {PureComponent} from 'react'

class Title extends PureComponent {
  render() {
    const {name} = this.props;
    return (
      <span className="textTitle">
        {(name || "").toUpperCase()}
      </span>
    )
  }
}

export default Title
