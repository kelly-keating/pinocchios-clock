import React from 'react'

class Clock extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      colour: {
        red: 0,
        green: 0,
        blue: 0
      }
    }

  }

  componentDidMount(){
    setInterval(this.recolour, 500)
  }

  recolour() {
    console.log('hi')

  }


  render(){
    return(
      <div id='clock'>TIME</div>
    )
  }

}

export default Clock
