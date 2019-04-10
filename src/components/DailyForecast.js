import React, { Component } from 'react'

export class DailyForecast extends Component {
  render() {
    return (
      <div>{this.props.forecast.day}</div>
    )
  }
}

export default DailyForecast
