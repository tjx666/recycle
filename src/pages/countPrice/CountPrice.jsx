import * as React from 'react';
import PropTypes from 'prop-types';

export const CountPrice = (props) => {
    return (
        <div className="count-price">
            <h2></h2>
        </div>
    );
}

CountPrice.propTypes = {
    type: PropTypes.oneOf(['phone', 'pad', 'notebook'])
}