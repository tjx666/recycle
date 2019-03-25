import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Button.scss';

export const Button = withRouter((props) => {
    const { type, history, href, size, disabled, shape, block, children, onTap, className='', style={} } = props;
    const buttonClasses = `ytj-button  button-type-${type} button-size-${size} ${disabled ? 'button-disabled' : ''}` +
        ` button-shape-${shape} ${block ? 'button-block' : ''} ${className}`;

    const handleTap = () => {
        onTap && onTap();
        if (!!href && !disabled) {
            history.push(href);
        }
    }

    return (
        <button className={buttonClasses} onClick={handleTap} style={style}>
            {children}
        </button>
    );
});

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'dashed', 'danger']),
    href: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'middle', 'large']),
    icon: PropTypes.string,
    shape: PropTypes.oneOf(['default', 'round', 'circle']),
    block: PropTypes.bool,
    onTap: PropTypes.func,
}

Button.defaultProps = {
    type: 'default',
    size: 'middle',
    shape: 'default',
    block: false,
}