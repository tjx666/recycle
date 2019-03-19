import * as React from 'react';
import PropTypes from 'prop-types';
import { deviceTypes } from '../../constants/strings';
import './DeviceTypeList.scss';

export const DeviceTypeList = (props) => {
    const [selectedItem, setSelectedItem] = React.useState(deviceTypes[0]);
    
    const handleSelect = (text) => {
        setSelectedItem(text);
    }
    
    const renderList = (deviceTypes) => deviceTypes.map(deviceType => {
        return (
            <DeviceTypeItem
                key={deviceType}
                text={deviceType}
                selected={deviceType === selectedItem }
                onSelect={handleSelect}
            />
        );
    })
    
    return (
        <div className="device-type-list">
            {renderList(deviceTypes)}
        </div>
    );
}

const DeviceTypeItem = (props) => {
    const { text, selected, onSelect } = props;
    
    const handleClick = () => {
        onSelect(text);
    }

    return (
        <div className={`device-type-item ${selected && 'device-type-item-selected'}`}>
            <span onClick={handleClick}>{ text }</span>
        </div>
    );
}

DeviceTypeItem.propTypes = {
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
}

DeviceTypeItem.defaultProps = {
    selected: false,
}