import * as React from 'react';
import PropTypes from 'prop-types';
import './DeviceList.scss';

export const DeviceList = (props) => {
    const { deviceListData } = props;
    
    const renderDeviceList = () => deviceListData.map((device) => {
        const { imageSrc, model } = device;

        return (
            <DeviceListItem
                key={model}
                imageSrc={imageSrc}
                model={model}
            />
        );
    })

    return (
        <div className="device-list">
            {renderDeviceList()}
        </div>
    );
};

DeviceList.propTypes = {
    deviceListData: PropTypes.array.isRequired,
}

const DeviceListItem = (props) => {
    const { imageSrc, model } = props;

    
    return (
        <div className="model-wrapper" >
            <img src={imageSrc} alt={model} />
            <span>{model}</span>
            <div className="cover"></div>
        </div>
    )
}

DeviceListItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
}