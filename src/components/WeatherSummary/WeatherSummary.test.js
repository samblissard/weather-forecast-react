import React from 'react';
import ReactDOM from 'react-dom';
import WeatherSummary from './WeatherSummary';

it('renders without crashing given no weather image', () => {
  const div = document.createElement('div');

  ReactDOM.render(<WeatherSummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing given weather image', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(<WeatherSummary weatherSummaryImage='http://test.com/item.png'/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });