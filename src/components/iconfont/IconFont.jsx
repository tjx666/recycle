import * as React from 'react';
import PropTypes from 'prop-types';
import '../../assets/js/iconfont';

export const Iconfont = (props) => {
    const {type, className, ...restProps} = props;
    
    return (
        <svg {...restProps} className={`icon ${className}`} aria-hidden="true">
            <use xlinkHref={`#icon-${type}`}></use>
        </svg>
    );
};

Iconfont.propTypes = {
    type: PropTypes.string.isRequired,
};
