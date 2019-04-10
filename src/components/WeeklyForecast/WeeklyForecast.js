import React, { Component } from 'react'
import DailyForecast from '../DailyForecast/DailyForecast'
import PropTypes from 'prop-types'

export class WeeklyForecast extends Component {
  render() {
    return (
      this.props.forecasts.map(forecast => (
        <DailyForecast key={forecast.day} forecast={forecast}></DailyForecast>
      ))
    )
  }
}

WeeklyForecast.propTypes = {
  forecasts: PropTypes.array.isRequired
}

export default WeeklyForecast
