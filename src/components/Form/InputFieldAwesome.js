import React, { PropTypes } from 'react';

const propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

const InputFieldAwesome = ({
    input,
    label,
    type,
    meta: { touched, error },
}) => {
    return (
        <label htmlFor={input.name}>
            {label}
            <input
                {...input}
                value={`awesome${input.value}`}
                id={input.name}
                type={type}
                style={{ marginLeft: '10px' }}
            />
            {(touched && error) && (
                <span style={{ color: '#d34545', marginLeft: '10px' }}>{error}</span>
            )}
        </label>
    );
};

InputFieldAwesome.propTypes = propTypes;

export default InputFieldAwesome;