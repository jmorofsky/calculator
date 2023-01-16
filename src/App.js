import React from 'react';
import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      val1: 0,
      val2: null,
      decimal: false,
      operator: null,
      justCalculated: false,
      on: false
    }

    this.number = this.number.bind(this)
    this.clear = this.clear.bind(this)
    this.setOperator = this.setOperator.bind(this)
    this.decimal = this.decimal.bind(this)
    this.switchSign = this.switchSign.bind(this)
    this.calculate = this.calculate.bind(this)
    this.turnOn = this.turnOn.bind(this)
  }

  turnOn() {
    this.setState({ on: true })
  }

  clear() {
    if (this.state.on === true) {
      this.setState({ val1: 0, val2: null, decimal: false, operator: null, justCalculated: false })
    }
  }

  number(val) {
    if (this.state.on === true) {
      if (this.state.justCalculated === true) {
        this.clear()
        this.setState({ val1: val })
        setTimeout(this.number(val), 15)
      }

      if (this.state.val1 === 0 && this.state.operator == null) {
        this.setState({ val1: val })
      } else if (this.state.operator == null) {
        let result = this.state.val1.toString() + val.toString()
        result = parseFloat(result)
        this.setState({ val1: result })
      } else if (this.state.val2 == null) {
        this.setState({ val2: val })
      } else {
        let result = this.state.val2.toString() + val.toString()
        result = parseFloat(result)
        this.setState({ val2: result })
      }
    }
  }

  setOperator(op) {
    if (this.state.on === true) {
      this.setState({ operator: op, decimal: false, justCalculated: false })
    }
  }

  decimal() {
    if (this.state.on === true) {
      if (this.state.justCalculated === true) {
        this.clear()
        this.setState({ val1: "0.", decimal: true })
        this.decimal()
      }

      let decimalNum
      if (this.state.decimal === false && this.state.operator === null) {
        decimalNum = this.state.val1
        String(decimalNum)
        decimalNum += "."
        this.setState({ val1: decimalNum, decimal: true })
      } else if (this.state.decimal === false && this.state.val2 != null) {
        decimalNum = this.state.val2
        String(decimalNum)
        decimalNum += "."
        this.setState({ val2: decimalNum, decimal: true })
      } else {
        decimalNum = "0."
        this.setState({ val2: decimalNum, decimal: true })
      }
    }
  }

  switchSign() {
    if (this.state.on === true) {
      this.setState({ justCalculated: false })

      let reverse
      if (this.state.val2 == null && this.state.operator == null) {
        reverse = this.state.val1 * -1
        this.setState({ val1: reverse })
      } else if (this.state.val2 === null && this.state.operator === "-") {
        this.setState({ operator: "+" })
      } else if (this.state.val2 === null && this.state.operator === "+") {
        this.setState({ operator: "-" })
      } else {
        reverse = this.state.val2 * -1
        this.setState({ val2: reverse })
      }
    }
  }

  calculate() {
    if (this.state.on === true) {
      let answer
      if (this.state.val2 == null) {
        answer = this.state.val1
      } else {
        switch (this.state.operator) {
          case "+":
            answer = this.state.val1 + this.state.val2
            break;
          case "-":
            answer = this.state.val1 - this.state.val2
            break;
          case "*":
            answer = this.state.val1 * this.state.val2
            break;
          case "/":
            answer = this.state.val1 / this.state.val2
            break;
          default:
            answer = this.state.val1
        }
      }

      this.setState({ val1: answer, val2: null, operator: null, justCalculated: true })
      if (answer % 1 === 0) {
        this.setState({ decimal: false })
      }
    }
  }

  render() {
    if (this.state.on === true) {
      return (
        <div>
          <div className='topBase'>
            <div className='outerContainer'>
              <div className='innerContainer'>
                {this.state.val1}{this.state.operator}{this.state.val2}
                <p className='textShadow'>888888888888</p>
              </div>
            </div>
          </div>

          <div className='bottomBase'>
            <div className='flexContainer'>
              <button className='on' onClick={this.turnOn}>on</button>
              <button className='clear' onClick={this.clear}>c</button>
              <button className='button' onClick={this.switchSign}>+/-</button>
              <button className='button' onClick={() => this.setOperator("/")}>÷</button>

              <button className='button' onClick={() => this.number(7)}>7</button>
              <button className='button' onClick={() => this.number(8)}>8</button>
              <button className='button' onClick={() => this.number(9)}>9</button>
              <button className='button' onClick={() => this.setOperator("*")}>×</button>

              <button className='button' onClick={() => this.number(4)}>4</button>
              <button className='button' onClick={() => this.number(5)}>5</button>
              <button className='button' onClick={() => this.number(6)}>6</button>
              <button className='button' onClick={() => this.setOperator("-")}>-</button>

              <div className='secondContainer'>
                <button className='button' onClick={() => this.number(1)}>1</button>
                <button className='button' onClick={() => this.number(0)}>0</button>
                <button className='button' onClick={() => this.number(2)}>2</button>
                <button className='button' onClick={this.decimal}>.</button>
                <button className='button' onClick={() => this.number(3)}>3</button>
                <button className='button' onClick={this.calculate}>=</button>
                <button className='plus' onClick={() => this.setOperator("+")}>+</button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='topBase'>
            <div className='outerContainer'>
              <div className='innerContainer'>
              </div>
            </div>
          </div>

          <div className='bottomBase'>
            <div className='flexContainer'>
              <button className='on' onClick={this.turnOn}>on</button>
              <button className='clear' onClick={this.clear}>c</button>
              <button className='button' onClick={this.switchSign}>+/-</button>
              <button className='button' onClick={() => this.setOperator("/")}>÷</button>

              <button className='button' onClick={() => this.number(7)}>7</button>
              <button className='button' onClick={() => this.number(8)}>8</button>
              <button className='button' onClick={() => this.number(9)}>9</button>
              <button className='button' onClick={() => this.setOperator("*")}>×</button>

              <button className='button' onClick={() => this.number(4)}>4</button>
              <button className='button' onClick={() => this.number(5)}>5</button>
              <button className='button' onClick={() => this.number(6)}>6</button>
              <button className='button' onClick={() => this.setOperator("-")}>-</button>

              <div className='secondContainer'>
                <button className='button' onClick={() => this.number(1)}>1</button>
                <button className='button' onClick={() => this.number(0)}>0</button>
                <button className='button' onClick={() => this.number(2)}>2</button>
                <button className='button' onClick={this.decimal}>.</button>
                <button className='button' onClick={() => this.number(3)}>3</button>
                <button className='button' onClick={this.calculate}>=</button>
                <button className='plus' onClick={() => this.setOperator("+")}>+</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

//fix too many nums to display

export default App;