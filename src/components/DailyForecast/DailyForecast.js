import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DailyForecast.css'

export class DailyForecast extends Component {

  render() {
    const { day, high, low } = this.props.forecast

    return (
      <div>
        <div>{day}</div>
        <div className="high">{high}</div>
        <div className="low">{low}</div>
      </div>
    )
  }
}

DailyForecast.propTypes = {
  forecast: PropTypes.object.isRequired
}

export default DailyForecast
