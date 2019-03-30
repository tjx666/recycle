import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import './DeviceList.scss';

export const DeviceList = (props) => {
    const { deviceListData, onClickReadMore } = props;

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

    const handleClickReadMore = () => {
        onClickReadMore();
    }

    return (
        <div className="device-list">
            <Scrollbars
                style={{ width: 860, height: 528, borderBottom: '1px solid rgb(32, 178, 170)' }}
                autoHide
            >
                <div className="device-list-body">
                    {renderDeviceList()}
                </div>
            </Scrollbars>
            <ReadMore
                desc={'查看更多'}
                disabled={false}
                onClickReadMore={handleClickReadMore}
            />
        </div>
    );
};

DeviceList.propTypes = {
    deviceListData: PropTypes.array.isRequired,
    onClickReadMore: PropTypes.func.isRequired,
}


const DeviceListItem = (props) => {
    const { imageSrc, model } = props;

    return (
        <Link to={`/count_price?device=${model}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="model-wrapper" >
                <img src={imageSrc} alt={model} />
                <span>{model}</span>
            </div>
        </Link>
    )
}

DeviceListItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
}


const ReadMore = (props) => {
    const { desc, disabled, onClickReadMore } = props;
    const handleClickReadMore = () => onClickReadMore();

    return (
        <div onClick={handleClickReadMore} className={`read-more ${disabled ? 'read-more-disable' : ''}`} >
            <span>{desc}</span>
        </div>
    );
}

ReadMore.propTypes = {
    desc: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    onClickReadMore: PropTypes.func.isRequired,
}