import React from 'react';
import PropTypes from 'prop-types';

const Child = ({ message }) => {
    return <h2>This is child component. <br></br>Message from Parent: {message}</h2>;
};

Child.propTypes = {
    message: PropTypes.string.isRequired
};

export default Child;
