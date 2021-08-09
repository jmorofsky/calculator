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
    if (this.state.on === true) {
      this.setState({ val: '0' })
    }
  }

  render() {
    if (this.state.on) {
      return (
        <div>
          <div className='nums'>888888888</div>
          <div className='display' style={{ paddingLeft: 9 - this.state.val.length + 'ch' }}>{this.state.val}</div>

          <div className='on'><strong>on</strong></div>
          <div className='c' onClick={this.clear}><strong>c</strong></div>
          <div className='m'><strong>m+</strong></div>
          <div className='divide'><strong>/</strong></div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='nums'>888888888</div>

          <div
            className='button'
            onClick={this.turnOn}
            style={{
              top: 33 + 'px',
              backgroundColor: '#ff5454',
              color: '#fff',
              boxShadow: '3px 3px #bd3e3e'
            }}>
            <strong>on</strong>
          </div>
          <div
            className='button'
            style={{
              left: 90 + 'px',
              top: 33 + 'px',
              backgroundColor: '#5c5c5c',
              color: '#fff',
              boxShadow: '3px 3px #292929'
            }}>
            <strong>c</strong>
          </div>
          <div className='button' style={{ left: 180 + 'px', top: 33 + 'px' }}><strong>m+</strong></div>
          <div className='button' style={{ left: 270 + 'px', top: 33 + 'px' }}><strong>÷</strong></div>

          <div className='button' style={{ top: 99 + 'px' }}><strong>7</strong></div>
          <div className='button' style={{ left: 90 + 'px', top: 99 + 'px' }}><strong>8</strong></div>
          <div className='button' style={{ left: 180 + 'px', top: 99 + 'px' }}><strong>9</strong></div>
          <div className='button' style={{ left: 270 + 'px', top: 99 + 'px' }}><strong>×</strong></div>

          <div className='button' style={{ top: 165 + 'px' }}><strong>4</strong></div>
          <div className='button' style={{ left: 90 + 'px', top: 165 + 'px' }}><strong>5</strong></div>
          <div className='button' style={{ left: 180 + 'px', top: 165 + 'px' }}><strong>6</strong></div>
          <div className='button' style={{ left: 270 + 'px', top: 165 + 'px' }}><strong>−</strong></div>

          <div className='button' style={{ top: 231 + 'px' }}><strong>1</strong></div>
          <div className='button' style={{ left: 90 + 'px', top: 231 + 'px' }}><strong>2</strong></div>
          <div className='button' style={{ left: 180 + 'px', top: 231 + 'px' }}><strong>3</strong></div>

          <div className='button' style={{ top: 297 + 'px' }}><strong>0</strong></div>
          <div className='button' style={{ left: 90 + 'px', top: 297 + 'px' }}>•</div>
          <div className='button' style={{ left: 180 + 'px', top: 297 + 'px' }}><strong>=</strong></div>

          <div className='button'
            style={{
              left: 270 + 'px',
              top: 231 + 'px',
              backgroundColor: '#24b6ff',
              color: '#fff',
              boxShadow: '3px 3px #1677a8',
              height: 107 + 'px',
              maxHeight: 107 + 'px',
              lineHeight: 107 + 'px'
            }}>
            <strong>+</strong>
          </div>
        </div>
      )
    }
  }
}

export default App