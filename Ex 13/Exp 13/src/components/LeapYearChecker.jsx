import React, { Component } from 'react';

class LeapYearChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2024,
      isLeapYear: null,
    };
  }

  checkLeapYear = () => {
    const { year } = this.state;
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    this.setState({ isLeapYear });
  };

  handleChange = (e) => {
    this.setState({ year: parseInt(e.target.value, 10) });
  };

  render() {
    return (
      <div>
        <h2>Leap Year Checker</h2>
        <input
          type="number"
          value={this.state.year}
          onChange={this.handleChange}
          placeholder="Enter a year"
        />
        <button onClick={this.checkLeapYear}>Check Leap Year</button>
        {this.state.isLeapYear !== null && (
          <p>{this.state.year} is {this.state.isLeapYear ? '' : 'not '}a leap year.</p>
        )}
      </div>
    );
  }
}

export default LeapYearChecker;
