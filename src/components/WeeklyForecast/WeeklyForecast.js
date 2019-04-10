import React, { Component } from 'react'
import DailyForecast from '../DailyForecast/DailyForecast'

export class WeeklyForecast extends Component {
  render() {
    if (!this.props.forecasts) {
      return(
        <React.Fragment></React.Fragment>
      )
    }

    return (
      this.props.forecasts.map(forecast => (
        <DailyForecast key={forecast.day} forecast={forecast}></DailyForecast>
      ))
    )
  }
}

export default WeeklyForecast
