import * as React from 'react';
import PropTypes from 'prop-types';
import { StepsList, OptionsPanel } from '../../components';
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
        <OptionsPanel step="使用情况" options={[
                '正常进入桌面',
                '全新包装未拆封',
                '无法开机/无法进入桌面'
            ]}/>
        </div>
    );
}

CountPrice.propTypes = {
    type: PropTypes.oneOf(['phone', 'pad', 'notebook'])
}