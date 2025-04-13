import React, { Component } from 'react';

class PalindromeChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isPalindrome: null,
    };
  }

  handleChange = (e) => {
    const input = e.target.value;
    const isPalindrome = input === input.split('').reverse().join('');
    this.setState({ input, isPalindrome });
  };

  render() {
    return (
      <div>
        <h2>Palindrome Checker</h2>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Enter a word"
        />
        {this.state.input && (
          <p>{this.state.input} is {this.state.isPalindrome ? '' : 'not '}a palindrome.</p>
        )}
      </div>
    );
  }
}

export default PalindromeChecker;
