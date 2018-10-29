import React, {PureComponent} from 'react'

class BodyNav extends PureComponent {

  render() {
    return (
      <div>
        {this.props.children.map((child, id) =>
          <div key={id}>{child}</div>
        )}
      </div>
    )
  }
}

BodyNav.defaultProps = {}
BodyNav.propsTypes = {}

export default BodyNav



