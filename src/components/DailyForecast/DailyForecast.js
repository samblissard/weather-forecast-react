import React, { Component } from 'react'

const highStyle = {
  color: 'red'
}

const lowStyle = {
  color: 'blue'
}

export class DailyForecast extends Component {

  render() {
    const { day, high, low } = this.props.forecast

    return (
      <div>
        <div>{day}</div>
        <div style={highStyle}>{high}</div>
        <div style={lowStyle}>{low}</div>
      </div>
    )
  }
}

export default DailyForecast
