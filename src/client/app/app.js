import React from 'react'
import Header from './header'
import Counter from './counter'
import ButtonLike from './buttonLike'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      likes: 0
    }

    this.like = this.like.bind(this)
  }

  like() {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Counter likes={this.state.likes} />
          <ButtonLike onClick={this.like} />
        </div>
      </div>
    )
  }
}
