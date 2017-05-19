import React from 'react'

class Face extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <g>
        <circle fill='white' cx={this.props.circle.cx} cy={this.props.circle.cy} r={this.props.circle.r}/>
        <circle cx={this.props.leftEye.cx} cy={this.props.leftEye.cy} r={this.props.leftEye.r}/>
        <circle cx={this.props.rightEye.cx} cy={this.props.rightEye.cy} r={this.props.rightEye.r}/>
        <polygon points={`${this.props.circle.cx} ${this.props.circle.cy},${this.props.circle.cx + 1.2 * this.props.circle.r * this.props.counter} ${this.props.circle.cy + 0.2 * this.props.circle.r}, ${this.props.circle.cx} ${this.props.circle.cy + 0.3 * this.props.circle.r}`}/>

      </g>
    )
  }
}

export default Face
