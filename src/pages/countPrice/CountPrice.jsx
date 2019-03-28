import * as React from 'react';
import PropTypes from 'prop-types';
import { StepsList } from '../../components';
import './CountPrice.scss';

const getStepsByType = (type) => {
    switch (type) {
        case 'pad': return [
            '使用情况',
            '选择内存',
            '屏幕外观',
            '屏幕显示',
            '账号能否退出',
            '维修情况',
            '多选'
        ]
        case 'notebook': return [
            '处理器',
            '硬盘',
            '内存',
            '开机运行',
            '屏幕外观',
            '屏幕显示',
            '多选'
        ]
        default: return [
            '使用情况',
            '选择内存',
            '屏幕外观',
            '屏幕显示',
            '账号能否退出',
            '维修情况',
            '多选'
        ]
    }
}

export const CountPrice = (props) => {
    const loadStepsData = () => {
        const steps = getStepsByType();
        return steps.map((step, index) => {
            return {
                step,
                isSelected: index % 2 === 0
            }
        })
    }
    
    return (
        <div className="count-price">
            <StepsList
                stepsData={loadStepsData()}
            />
        </div>
    );
}

CountPrice.propTypes = {
    type: PropTypes.oneOf(['phone', 'pad', 'notebook'])
}