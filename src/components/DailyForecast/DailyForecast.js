import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

DailyForecast.propTypes = {
  forecast: PropTypes.object.isRequired
}

export default DailyForecast
