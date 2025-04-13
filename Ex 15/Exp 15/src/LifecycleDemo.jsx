import React from 'react';

class LifecycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('Constructor: Component is being created');
    }

    componentDidMount() {
        console.log('componentDidMount: Component has been mounted to the DOM');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Component has been updated');
        console.log('Previous State:', prevState);
        console.log('Current State:', this.state);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Component is about to be removed from the DOM');
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    render() {
        return (
            <div style={{ border: '2px solid purple', padding: '20px', margin: '20px' }}>
                <h2>Lifecycle Demo</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment Count</button>
            </div>
        );
    }
}

export default LifecycleDemo;
