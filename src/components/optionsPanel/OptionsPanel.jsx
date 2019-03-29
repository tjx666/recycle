import * as React from 'react';
import PropTypes from 'prop-types';
import { PrettyCheckbox } from '../index';
import './OptionsPanel.scss';

export const OptionsPanel = (props) => {
    const { step, options, className: extraClassName = {}, style: extraStyle = {} } = props;

    return (
        <div className={`options-panel ${extraClassName}`} style={{...extraStyle}}>
            <div className="panel-header">
                <span className="current-step">{step}</span>
            </div >
        </div>
    );
}

OptionsPanel.propTypes = {
    step: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
}

const OptionList = (props) => {
    const { optionContent, selected } = props;

    return (
        <ul>
            
        </ul>
    )
}

OptionList.propTypes = {
    optionListContent: PropTypes.array.isRequired,
    multiple: PropTypes.bool,
    selection: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

OptionList.defaultProps = {
    multiple: false,
}
