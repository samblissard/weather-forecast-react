import React, { Component } from 'react'
import DailyForecast from '../DailyForecast/DailyForecast'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

export class WeeklyForecast extends Component {
  render() {
    return (
      <div>
        <h1>Weather this week</h1>
        <Grid container spacing={2}>
          {this.props.forecasts.map(forecast => (
            <Grid item xs={1}>
              <DailyForecast key={forecast.day} forecast={forecast}></DailyForecast>
            </Grid>
          ))}
        </Grid>
      </div>
        
    )
  }
}

WeeklyForecast.propTypes = {
  forecasts: PropTypes.array.isRequired
}

export default WeeklyForecast
