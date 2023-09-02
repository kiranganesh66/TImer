import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {count: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  resetBtn = () => {
    clearInterval(this.timerID)
    this.setState({count: 0, isTimerRunning: false})
  }

  stopBtn = () => {
    clearInterval(this.timerID)
    this.setState({isTimerRunning: false})
  }

  tick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  startBtn = () => {
    // const {count, minute} = this.state

    this.timerID = setInterval(this.tick, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSec = () => {
    const {count} = this.state
    const sec = Math.floor(count % 60)

    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  renderMin = () => {
    const {count} = this.state
    const min = Math.floor(count / 60)

    if (min < 10) {
      return `0${min}`
    }
    return min
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMin()}:${this.renderSec()}`
    return (
      <div className="Main-bg">
        <div>
          <h1 className="Heading">Stopwatch</h1>
          <div className="timerCont">
            <div className="timerLog-Cont">
              <img
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="logo_img"
              />
              <p>Timer</p>
            </div>

            <p>{time}</p>
            <div>
              <button
                onClick={this.startBtn}
                type="button"
                disabled={isTimerRunning}
              >
                start
              </button>
              <button onClick={this.stopBtn} type="button">
                stop
              </button>
              <button onClick={this.resetBtn} type="button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
