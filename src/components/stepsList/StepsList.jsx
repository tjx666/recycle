import * as React from 'react';
import PropTypes from 'prop-types';
import { Iconfont } from '../index';
import './StepsList.scss';


export const StepsList = (props) => {
    const { type, stepsData, currentStep } = props;
    const wordsMap = new Map([['phone', '手机'], ['pad', '平板'], ['notebook', '笔记本']]);

    const renderHeader = () => {
        return (
            <div className="steps-list-header">{`${wordsMap.get(type)}估值步骤`}</div>
        )
    }

    const renderItems = () => stepsData.map(({ step, isSelected }, index) =>
        <StepsListItem
            key={step}
            step={step}
            selected={isSelected}
            isCurrentStep={currentStep === index}
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
    stepsData: PropTypes.array,
    currentStep: PropTypes.number,
}

StepsList.defaultProps = {
    type: 'phone',
    stepsData: [],
    currentStep: 0,
}


const StepsListItem = (props) => {
    const { step, selected, isCurrentStep } = props;

    return (
        <li className={`step-item ${isCurrentStep ? 'step-item-current' : ''}`}>
            <span>{step}</span>
            <Iconfont className="status-box" type={selected ? 'xuanze-fangkuang' : 'fangkuang'} />
        </li>
    )
}

StepsListItem.propTypes = {
    step: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    isCurrentStep: PropTypes.bool.isRequired,
}