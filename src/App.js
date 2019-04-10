import React, { Component } from 'react';
import WeeklyForecast from './components/WeeklyForecast/WeeklyForecast'

class App extends Component {
  state = {
    forecasts: [
      {
        day: 'Sunday',
        high: 80,
        low: 60
      },
      {
        day: 'Monday',
        high: 80,
        low: 60
      },
      {
        day: 'Tuesday',
        high: 80,
        low: 60
      },
      {
        day: 'Wednesday',
        high: 80,
        low: 60
      },
      {
        day: 'Thursday',
        high: 80,
        low: 60
      },
      {
        day: 'Friday',
        high: 80,
        low: 60
      },
      {
        day: 'Saturday',
        high: 80,
        low: 60
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
