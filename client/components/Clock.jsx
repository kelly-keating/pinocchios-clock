import React from 'react'
import { Link } from 'react-router-dom'

class Clock extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      h: 0,
      m: 0,
      s: 0
    }
  }

  componentDidMount(){
    setInterval(() => {this.recolour()}, 50)
  }

  recolour() {
    var date = new Date()
    this.setState({
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds()
    })
    var s = this.colour(this.state.s, 60)
    var m = this.colour(this.state.m, 60)
    var h = this.colour(this.state.h, 24)

    console.log(`${h} ${m} ${s}`);

    document.body.style.backgroundColor = `rgb(${s},${m},${h})`
  }

  colour(time, base) {
    return Math.floor(time*255/(base-1))
  }

  linkToClock() {
    return (
      <div id='clock'><Link to='/clock'>TIME</Link></div>
    )
  }

  ownPage() {
    return(
      <div id='clock'>
        TIME
        <div id='time'>#{this.state.h}:{this.state.m}:{this.state.s}</div>
        <Link to='/'>BACK IN</Link>
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
