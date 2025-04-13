import React, { Component } from 'react';

class RandomNumberButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: null,
    };
  }

  generateNumber = () => {
    this.setState({ randomNumber: Math.floor(Math.random() * 100) + 1 });
  };

  render() {
    return (
      <div>
        <h2>Random Number Button</h2>
        <button onClick={this.generateNumber}>Generate Number</button>
        {this.state.randomNumber !== null && (
          <p>Generated Number: {this.state.randomNumber}</p>
        )}
      </div>
    );
  }
}

export default RandomNumberButton;
