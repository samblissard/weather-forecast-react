import React, { Component } from 'react';
import WeeklyForecast from './components/WeeklyForecast/WeeklyForecast'

class App extends Component {
  state = {
    forecasts: [
      {
        day: 'Sun',
        high: 80,
        low: 60,
        weatherSummaryImage: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png'
      },
      {
        day: 'Mon',
        high: 80,
        low: 60,
        weatherSummaryImage: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
      },
      {
        day: 'Tue',
        high: 80,
        low: 60,
        weatherSummaryImage: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
      },
      {
        day: 'Wed',
        high: 80,
        low: 60,
        weatherSummaryImage: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png'
      },
      {
        day: 'Thu',
        high: 80,
        low: 60,
        weatherSummaryImage: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png'
      },
      {
        day: 'Fri',
        high: 80,
        low: 60,
        weatherSummaryImage: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png'
      },
      {
        day: 'Sat',
        high: 80,
        low: 60,
        weatherSummaryImage: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <WeeklyForecast forecasts={this.state.forecasts}></WeeklyForecast>
        
      </div>
    );
  }
}

export default App;
