import * as React from 'react';
import PropTypes from 'prop-types';
import { deviceTypes } from '../../constants/strings';
import './DeviceTypeList.scss';

export const DeviceTypeList = (props) => {
    const { onSelectDeviceType } = props;
    const [selectedItem, setSelectedItem] = React.useState(deviceTypes[0]);
    
    const handleSelect = (type) => {
        setSelectedItem(type);
        onSelectDeviceType(type);
    }
    
    const renderList = (deviceTypes) => deviceTypes.map(deviceType => {
        return (
            <DeviceTypeItem
                key={deviceType}
                type={deviceType}
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

DeviceTypeList.propTypes = {
    onSelectDeviceType: PropTypes.func.isRequired
}

const DeviceTypeItem = (props) => {
    const { type, selected, onSelect } = props;
    
    const handleClick = () => {
        onSelect(type);
    }

    return (
        <div className={`device-type-item ${selected ? 'device-type-item-selected' : 'device-type-item-not-selected'}`}>
            <span className="device-type" onClick={handleClick}>{ type }</span>
        </div>
    );
}

DeviceTypeItem.propTypes = {
    type: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
}

DeviceTypeItem.defaultProps = {
    selected: false,
}