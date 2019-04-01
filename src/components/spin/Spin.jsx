import * as React from 'react';
import PropTypes from 'prop-types';
import './Spin.scss';
const Spinner = require('react-spinkit');

export const Spin = (props) => {
    const {
        showSpin,
        type,
        desc,
        className: extraClassName = '',
        style: extraStyle = {},
        fadeIn,
        overrideSpinnerClassName,
        color,
        spinnerClassName,
        spinnerStyle
    } = props;

    return (
        <div className={`spin ${extraClassName}`} style={{ display: showSpin ? 'block' : 'none', ...extraStyle }}>
            <Spinner
                name={type}
                className={spinnerClassName}
                style={{...spinnerStyle}}
                fadeIn={fadeIn}
                overrideSpinnerClassName={overrideSpinnerClassName}
                color={color}
            />
            <span className="spin-desc" style={{color}}>{desc}</span>
        </div>
    )
}

Spin.propTypes = {
    showSpin: PropTypes.bool,
    type: PropTypes.string,
    desc: PropTypes.string,
    fadeIn: PropTypes.oneOf(['full', 'half', 'quarter', 'none']),
    overrideSpinnerClassName: PropTypes.string,
    color: PropTypes.string,
    spinnerClassName: PropTypes.string,
    spinnerStyle: PropTypes.object,
}

Spin.defaultProps = {
    showSpin: false,
    type: 'circle',
    desc: 'loading...',
    fadeIn: 'none',
    overrideSpinnerClassName: 'spinner',
    color: 'gray',
    spinnerClassName: '',
    spinnerStyle: {},
}


