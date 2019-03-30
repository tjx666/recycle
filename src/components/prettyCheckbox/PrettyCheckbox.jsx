import * as React from 'react';
// import PropTypes from 'prop-types';
import './PrettyCheckbox.scss';

export const PrettyCheckbox = (props) => {
    return (
        <div class="pretty p-default p-round">
            <input type="checkbox" />
            <div class="state">
                <label>Default</label>
            </div>
        </div>
    )
}