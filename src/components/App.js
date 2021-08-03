import React from 'react'
import '../css/App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      val: '0',
      maxVal: 999999999,
      minVal: -999999999,
      on: false
    }

    this.turnOn = this.turnOn.bind(this)
    this.clear = this.clear.bind(this)
  }

  turnOn() {
    this.setState({ on: true })
  }

  clear() {
    if(this.state.on === true) {
      this.setState({ val: '0' })
    }
  }

  render() {
    if (this.state.on) {
      return (
        <div>
          <div className='nums'>888888888</div>
          <div className='display' style={{ paddingLeft: 9 - this.state.val.length + 'ch' }}>{this.state.val}</div>

          <div className='row1'>
            <div className='on' onClick={this.turnOn}><strong>on</strong></div>

            <div className='c' onClick={this.clear}><strong>c</strong></div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='nums'>888888888</div>

          <div className='row1'>
            <div className='on' onClick={this.turnOn}><strong>on</strong></div>

            <div className='c' onClick={this.clear}><strong>c</strong></div>
          </div>
        </div>
      )
    }
  }
}

export default App