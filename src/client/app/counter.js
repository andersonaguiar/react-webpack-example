import React, { PropTypes } from 'react'

const propTypes = {
  likes: PropTypes.number.isRequired
}

const defaultProps = {
  likes: 0
}

export default class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <p>Likes: {this.props.likes}</p>
      </div>
    )
  }
}

Counter.propTypes = propTypes
Counter.defaultProps = defaultProps
