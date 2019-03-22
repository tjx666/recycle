import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter} from 'react-router-dom';
import './Button.scss';

export const Button = withRouter((props) => {
    const { type, history, href, disabled, children, onTap, } = props;
    const buttonClasses = `ytj-button ytj-button-${type}`;

    const handleTap = () => {
        onTap();
        if (!!href && !disabled) {
            history.push(href);
        }
    }
    
    return (
        <div className={buttonClasses} onClick={handleTap}>
            {children}
        </div>
    );
});

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'dashed', 'danger']),
    href: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'middle', 'large']),
    icon: PropTypes.string,
    shape: PropTypes.oneOf(['default', 'circle', 'round']),
    block: PropTypes.bool,
    onTap: PropTypes.func,
}

Button.defaultProps = {
    type: 'default',
    size: 'middle',
    shape: 'default',
    block: false,
}