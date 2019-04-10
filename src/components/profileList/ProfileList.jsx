/* eslint-disable no-mixed-operators */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Iconfont, Divider } from '../index';
import './ProfileList.scss';

export const ProfileList = (props) => {
    const { accountData: {name, shippingAddress} } = props;
    
    return (
        <div className="profile-list">
            <ProfileItem name="名称" value={name}/>
            <Divider/>
            <ProfileItem name="收货地址" value={shippingAddress}/>
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
                {/* 这里就是根据是否有 render 这个 props 来返回不同的内容 */}
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
        <div className="simple-item-content">
            <span className="item-value">{value}</span> <Iconfont className="item-icon" type="edit"/> <span>修改</span>
        </div>
    )
}