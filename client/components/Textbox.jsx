import React from 'react'

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
      display: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit(event) {
    alert(`Submit at your own risk. If you lied, horrible things will happen to Pinocchio!`)
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <Textdisplay text={this.state.value}/>
        <form className = "textbox" onSubmit={this.handleSubmit}>
          <label className = "label">
            <span> Tell me something: </span>
            <input className = "inputbox" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className = "submit-button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Textbox
