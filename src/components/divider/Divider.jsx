import * as React from 'react';
import PropTypes from 'prop-types';
import './Divider.scss';

export const Divider = (props) => {
    const { className: extraClassName, style, type, dashed, orientation } = props;
    const className = `divider ${extraClassName} divider-type-${type} ${dashed ? 'divider-dashed' : ''} divider-orientation-${orientation}`;
     
    return (
        <div className={className} style={style}></div>
    );
}

Divider.props = {
    type: PropTypes.oneOf(['horizontal', 'vertical']),
    dashed: PropTypes.bool,
    orientation: PropTypes.oneOf(['left', 'middle', 'right']),
}

Divider.defaultProps = {
    type: 'horizontal',
    dashed: false,
    orientation: 'middle',

}
