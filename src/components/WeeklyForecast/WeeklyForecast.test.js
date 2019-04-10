import React from 'react';
import ReactDOM from 'react-dom';
import WeeklyForecast from './WeeklyForecast';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const forecasts = [
    {
      day: 'Sunday',
      high: 45,
      low: 20
    }
  ]

  ReactDOM.render(<WeeklyForecast forecasts={forecasts}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});