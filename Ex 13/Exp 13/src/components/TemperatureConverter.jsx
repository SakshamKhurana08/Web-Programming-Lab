import React, { Component } from 'react';

class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: '',
      fahrenheit: '',
    };
  }

  handleCelsiusChange = (e) => {
    const celsius = e.target.value;
    this.setState({
      celsius,
      fahrenheit: celsius ? (celsius * 9/5 + 32).toFixed(2) : '',
    });
  };

  handleFahrenheitChange = (e) => {
    const fahrenheit = e.target.value;
    this.setState({
      fahrenheit,
      celsius: fahrenheit ? ((fahrenheit - 32) * 5/9).toFixed(2) : '',
    });
  };

  render() {
    return (
      <div>
        <h2>Temperature Converter</h2>
        <label>
          Celsius:
          <input
            type="number"
            value={this.state.celsius}
            onChange={this.handleCelsiusChange}
          />
        </label>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={this.state.fahrenheit}
            onChange={this.handleFahrenheitChange}
          />
        </label>
      </div>
    );
  }
}

export default TemperatureConverter;
