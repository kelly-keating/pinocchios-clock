import React from 'react'
import Face from './Face'

class Textdisplay extends React.Component {
  render() {
    return (
      <p>

      {this.props.text}

      </p>
    )
  }
}

class Textbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'I never peed in a swimming pool',
      counter: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    console.log(this.state);
    alert(`Submit at your own risk. If you lied, horrible things will happen to Pinocchio!`)
    event.preventDefault();
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return(
      <div>
        <Textdisplay text={this.state.value}/>
        <form className="textbox" onSubmit={this.handleSubmit}>
          <label className="label">
            Tell me something:
            <input className="inputbox" type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input className="submit-button" type="submit" value="Submit"/>
        </form>
        <svg width={this.props.width} height={this.props.height}>
        <Face counter={this.state.counter} circle={this.props.circle} leftEye={this.props.leftEye} rightEye={this.props.rightEye}/>
        </svg>
      </div>
    )
  }
}

export default Textbox
