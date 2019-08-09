import React, { Component } from 'react'

export class WeatherSummary extends Component {
    render() {
			return (
				<div>
					<img src={this.props.weatherSummaryImage} alt='fakeText'/>
				</div>
			)
    }
}

export default WeatherSummary