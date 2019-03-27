import * as React from 'react';
import PropTypes from 'prop-types';
import './DeviceList.scss';

export const DeviceList = (props) => {
    const { deviceListData } = props;
    
    const renderDeviceList = () => deviceListData.map((device, index) => {
        const { imageSrc, model } = device;

        return (
            <DeviceListItem
                key={index}
                imageSrc={imageSrc}
                model={model}
            />
        );
    })

    return (
        <div className="device-list">
            <div className="device-list-body">
                {renderDeviceList()}
            </div>
            
            <ReadMore
                text={'查看更多'}
                disabled={false}
            />
        </div>
    );
};

const ReadMore = (props) => {
    const { text, disabled } = props;

    return (
        <div className={ `read-more ${ disabled ? 'read-more-disable' : ''}` } >
            <span>{text}</span>
        </div>
    );
}

ReadMore.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
}

DeviceList.propTypes = {
    deviceListData: PropTypes.array.isRequired,
}

const DeviceListItem = (props) => {
    const { imageSrc, model } = props;

    
    return (
        <div className="model-wrapper hvr-back-pulse hvr-grow-shadow" >
            <img src={imageSrc} alt={model} />
            <span>{model}</span>
        </div>
    )
}

DeviceListItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
}