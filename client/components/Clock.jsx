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
    setInterval(this.recolour, 50)
  }

  recolour() {
    var date = new Date()
    var s = Math.floor(date.getSeconds()*255/59)
    var m = Math.floor(date.getMinutes()*255/59)
    var h = Math.floor(date.getHours()*255/23)

    document.body.style.backgroundColor = `rgb(${s},${m},${h})`
  }


  render(){
    return(
      <div id='clock'>TIME</div>
    )
  }

}

export default Clock
