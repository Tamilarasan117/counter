import './index.css'
import { Component } from 'react'

class Counter extends Component {
  state = {count : 0}
  onIncrement = () => {
    this.setState(increaseState => {
      return {count : increaseState.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(decreaseState => {
      return {count : decreaseState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="count-cont">
          <h1 className="heading">COUNTER</h1>
          <p className="count">{count}</p>
          <div>
            <button className="button" onClick={this.onIncrement}>Increase</button>
            <button className="button" onClick={this.onDecrement}>Decrease</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter