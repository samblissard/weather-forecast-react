import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DailyForecast.css'
import WeatherSummary from '../WeatherSummary/WeatherSummary'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

export class DailyForecast extends Component {

  constructor(props) {
    super(props)
    this.state = {
      day: props.forecast.day,
      high: props.forecast.high,
      low: props.forecast.low,
      weatherSummaryImage: props.forecast.weatherSummaryImage,
    }

    this.updateTemps = this.updateTemps.bind(this)
  }

  updateTemps() {
    var highTemp = Math.floor(Math.random() * (101 - 85 + 1)) + 85
    var lowTemp = Math.floor(Math.random() * (85 - 70 + 1)) + 70   

    this.setState({
      high: highTemp,
      low: lowTemp
    })
  }

  render() {
    return (
      <Card>
        <CardContent>
          <WeatherSummary weatherSummaryImage={this.state.weatherSummaryImage}></WeatherSummary>
          <div>{this.state.day}</div>
          <div className="high">{this.state.high}</div>
          <div className="low">{this.state.low}</div>
        </CardContent>
        <CardActions>
          <button onClick={this.updateTemps}>Update</button>
        </CardActions>
      </Card>
    )
  }

  
}

DailyForecast.propTypes = {
  forecast: PropTypes.object.isRequired
}

export default DailyForecast
