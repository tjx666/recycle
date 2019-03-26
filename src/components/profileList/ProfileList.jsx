import * as React from 'react';
import PropTypes from 'prop-types';
import { Iconfont, Divider } from '../index';
import './ProfileList.scss';

export const ProfileList = (props) => {
    return (
        <div className="profile-list">
            <ProfileItem name="名称" value="余腾靖"/>
            <Divider/>
            <ProfileItem name="收货地址" value="江西省南昌市"/>
            <Divider/>
        </div>
    );
}

ProfileList.propTypes = {
    accountData: PropTypes.object,
}


const ProfileItem = (props) => {
    const { name, value, render } = props;

    return (
        <div className="profile-item">
            <span className="item-name">{name}</span>
            <form action="">
                {render && render(props) || <SimpleProfileItemContent value={value}/>}
            </form>
        </div>
    )
}

ProfileItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    render: PropTypes.func,
}

const SimpleProfileItemContent = ({value}) => {
    return (
        <div className="item-content">
            <span className="item-value">{value}</span> <Iconfont className="item-icon" type="edit"/> <span>修改</span>
        </div>
    )
}