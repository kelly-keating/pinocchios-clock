import React from 'react'

class Textdislay extends React.Component {
  render() {
    return (
      <p> I am funny text being displayed! </p>
    )
  }
}

class Textbox extends React.Component {
  renderTestdisplay(){
    return <Textdisplay />
  }

  constructor(props) {
    super(props);
    this.state = {value: 'I never peed in a swimming pool'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`Submit at your own risk. If you lied, horrible things will happen to Pinocchio!`)
    event.preventDefault();
  }

  render() {
    return(
      <form className = "textbox" onSubmit={this.handleSubmit}>
        <label className = "label">
          Tell me something:
          <input className = "inputbox" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className = "submit-button" type="submit" value="Submit" />
      </form>
    )
  }
}

export default Textbox
