import React from 'react'

function WeatherSummary(props) {
	if (!props.weatherSummaryImage) {
		return null
	}

	return (
		<div>
			<img src={props.weatherSummaryImage} alt='fakeText'/>
		</div>
	)
}

export default WeatherSummary