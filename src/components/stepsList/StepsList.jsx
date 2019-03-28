import * as React from 'react';
import PropTypes from 'prop-types';
import { Iconfont } from '../index';
import './StepsList.scss';


export const StepsList = (props) => {
    const { type, stepsData } = props;
    const wordsMap = new Map([['phone', '手机'], ['pad', '平板'], ['notebook', '笔记本']]);

    const renderHeader = () => {
        return (
            <div className="steps-list-header">{`${wordsMap.get(type)}估值步骤`}</div>
        )
    }

    const renderItems = () => stepsData.map(({ step, isSelected }) =>
        <StepsListItem
            key={step}
            step={step}
            isSelected={isSelected}
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
}

StepsList.defaultProps = {
    type: 'phone',
    stepsData: []
}


const StepsListItem = (props) => {
    const { step, isSelected } = props;

    return (
        <li className="step-item">
            <span>{step}</span>
            <Iconfont className="status-box" type={isSelected ? 'xuanze-fangkuang' : 'fangkuang'} />
        </li>
    )
}

StepsListItem.propTypes = {
    step: PropTypes.string,
    isSelected: PropTypes.bool
}