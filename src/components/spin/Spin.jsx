import * as React from 'react';
import PropTypes from 'prop-types';
import './Spin.scss';
const Spinner = require('react-spinkit');

export const Spin = (props) => {
    const {
        showSpin,
        type,
        className: extraClassName = '',
        style: extraStyle = {},
        fadeIn,
        overrideSpinnerClassName,
        color
    } = props;

    return (
        <Spinner
            name={type}
            className={`${extraClassName}`}
            style={{ display: showSpin ? 'block' : 'none', position: 'fixed', ...extraStyle }}
            fadeIn={fadeIn}
            overrideSpinnerClassName={overrideSpinnerClassName}
            color={color}
        />
    )
}

Spin.propTypes = {
    showSpin: PropTypes.bool,
    type: PropTypes.string.isRequired,
    fadeIn: PropTypes.oneOf(['full', 'half', 'quarter', 'none']),
    overrideSpinnerClassName: PropTypes.string,
    color: PropTypes.string,
}

Spin.defaultProps = {
    showSpin: false,
    fadeIn: 'none',
    overrideSpinnerClassName: 'spinner',
    color: 'gray',
}


