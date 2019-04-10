import React, { Component } from 'react'

export class DailyForecast extends Component {
  render() {
    const { day, high, low } = this.props.forecast

    return (
      <div>
        {day} | {high} | {low}
      </div>
    )
  }
}

export default DailyForecast
