import React from 'react';
import ReactDOM from 'react-dom';
import DailyForecast from './DailyForecast';

it('renders without crashing given no forecast', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DailyForecast />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing given forecast', () => {
  const div = document.createElement('div');
  const forecast = {
    day: 'Sunday',
    high: 45,
    low: 20
  };

  ReactDOM.render(<DailyForecast forecast={forecast} />, div);
  ReactDOM.unmountComponentAtNode(div);
});