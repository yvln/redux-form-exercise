// Exercise 2 TODO: Modify me

import React, { PropTypes } from 'react';

const propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

const InputField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
}) => {
    return (
        <label htmlFor={input.name}>
            {label}
            <input
                {...input}
                id={input.name}
                type={type}
                style={{ marginLeft: '10px' }}
            />
            {(touched && error) && (
                <span style={{ color: '#d34545', marginLeft: '10px' }}>{error}</span>
            )}
            {(touched && warning) && (
                <span style={{ color: 'orange', marginLeft: '10px' }}>{warning}</span>
            )}
        </label>
    );
};

InputField.propTypes = propTypes;

export default InputField;
