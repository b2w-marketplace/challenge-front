import React, {PureComponent} from 'react'

class Title extends PureComponent {
  render() {
    const {name} = this.props;
    return (
      <p className="textTitle">
        {(name || "").toUpperCase()}
      </p>
    )
  }
}

export default Title
