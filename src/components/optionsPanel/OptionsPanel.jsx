import * as React from 'react';
import PropTypes from 'prop-types';
import './OptionsPanel.scss';

export const OptionsPanel = (props) => {
    const { step, optionListContent, className: extraClassName = {}, style: extraStyle = {} } = props;

    return (
        <div className={`options-panel ${extraClassName}`} style={{ ...extraStyle }}>
            <div className="panel-header">
                <span className="current-step">{step}</span>
            </div >
            <OptionList optionListContent={optionListContent} />
        </div>
    );
}

OptionsPanel.propTypes = {
    step: PropTypes.string.isRequired,
    optionListContent: PropTypes.array.isRequired,
    multiple: PropTypes.bool,
}


const OptionList = (props) => {
    const { optionListContent, multiple } = props;
    const [ selection, setSelection ] = React.useState([]);

    const handleSelect = (optionContent) => {
        if (!multiple) {
            if (selection.includes(optionContent)) {
                setSelection([]);
            } else {
                setSelection([optionContent]);
            }
        } else {
            if (selection.includes(optionContent)) {
                setSelection(selection.filter(option => option !== optionContent));
            } else {
                setSelection([...selection, optionContent]);
            }
        }
    }

    const renderOptions = () => optionListContent.map((optionContent, index) => (
        <Option
            key={index}
            content={optionContent}
            onSelect={handleSelect}
            selected={selection.includes(optionContent)}
        />
    ))

    return (
        <ul className="option-list">{renderOptions()}</ul>
    )
}

OptionList.propTypes = {
    multiple: PropTypes.bool,
    optionListContent: PropTypes.array.isRequired,
}

OptionList.defaultProps = {
    multiple: false,
}


const Option = (props) => {
    const { content, selected, onSelect } = props;

    const handleClick = () => {
        onSelect(content);
    }

    return (
        <li className={`option ${selected ? 'selected' : ''}`} onClick={handleClick}>{content}</li>
    )
}

Option.propTypes = {
    content: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    onSelect: PropTypes.func
}