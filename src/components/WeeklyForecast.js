import React, { Component } from 'react'
import DailyForecast from './DailyForecast'

export class WeeklyForecast extends Component {
  render() {
    return (
      this.props.forecasts.map(forecast => (
        <DailyForecast key={forecast.day} forecast={forecast}></DailyForecast>
      ))
    )
  }
}

export default WeeklyForecast
