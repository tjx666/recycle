import * as React from 'react';
import PropTypes from 'prop-types';
import {} from '../'
import './StepsList.scss';


export const StepsList = (props) => {
    const { type, steps } = props;
    const wordsMap = new Map([['phone', '手机'], ['pad', '平板'], ['notebook', '笔记本']]);

    const renderHeader = () => {
        return (
            <div className="steps-list-header">{`${wordsMap.get(type)}估值步骤`}</div>
        )
    }

    const renderItems = () => steps.map(step =>
        <StepsListItem
            step={step}
        />
    )

    return (
        <ul className="steps-list">
        {renderHeader()}
        {renderItems()}
        </ul>
    );
}

StepsList.propTypes = {
    type: PropTypes.string,
    steps: PropTypes.array,
}

StepsList.defaultProps = {
    type: 'phone',
    steps: []
}


const StepsListItem = (props) => {
    const { step } = props;

    return (
        <li className="step-item">
            <span>{step}</span>
        </li>
    )
}

StepsListItem.propTypes = {
    step: PropTypes.string,
    isSelected: PropTypes.bool
}