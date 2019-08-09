import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DailyForecast.css'
import WeatherSummary from '../WeatherSummary/WeatherSummary'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export class DailyForecast extends Component {

  render() {
    const { day, high, low, weatherSummaryImage } = this.props.forecast

    return (
      <Card>
        <CardContent>
          <WeatherSummary weatherSummaryImage={weatherSummaryImage}></WeatherSummary>
          <div>{day}</div>
          <div className="high">{high}</div>
          <div className="low">{low}</div>
        </CardContent>
      </Card>
    )
  }
}

DailyForecast.propTypes = {
  forecast: PropTypes.object.isRequired
}

export default DailyForecast
