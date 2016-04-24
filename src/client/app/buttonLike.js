import React from 'react'

export default class ButtonLike extends React.Component {
  render() {
    return (
      <div className="button-like-container">
        <button className="bt" onClick={this.props.onClick}>Like</button>
      </div>
    )
  }
}
