import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './TextInput.css';

const TextInput = props => {
    return (
        <input
            type="text"
            value={props.value}
            className="TextInput"
        />
    )
}

TextInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
}

export default TextInput;
