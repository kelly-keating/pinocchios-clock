import React from 'react'
import { Link } from 'react-router-dom'

class Clock extends React.Component {

  constructor (props) {
    super(props)

  }

  componentDidMount(){
    setInterval(this.recolour, 50)
    console.log(this.props.location.pathname);
  }

  recolour() {
    var date = new Date()
    var s = Math.floor(date.getSeconds()*255/59)
    var m = Math.floor(date.getMinutes()*255/59)
    var h = Math.floor(date.getHours()*255/23)

    document.body.style.backgroundColor = `rgb(${s},${m},${h})`
  }

  linkToClock() {
    return (
      <div id='clock'><Link to='/clock'>TIME</Link></div>
    )
  }

  ownPage() {
    return(
      <div id='clock'>TIME
        <div id='time'></div>
      </div>
    )
  }

  render(){
    var page = this.props.location.pathname
    var content = (page === '/clock') ? this.ownPage() : this.linkToClock()
    return(
      content
    )
  }

}

export default Clock
