import * as React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export const Card = (props) => {
    const { children, title, headerStyle, bodyStyle, bordered, className='', style={}} = props;

    const cardClassNames = `card ${bordered ? 'bordered-card' : ''} ${className} }`;
    return (
        <div className={cardClassNames} style={style}>
            <div className="card-header" style={headerStyle}>{title}</div>
            <div className="card-body" style={bodyStyle}>{children}</div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    headerStyle: PropTypes.object,
    bordered: PropTypes.bool,
    bodyStyle: PropTypes.object,
    // size: PropTypes.oneOf(['default', 'small'])
}

Card.defaultProps = {
    bordered: false,
    size: 'default'
}

