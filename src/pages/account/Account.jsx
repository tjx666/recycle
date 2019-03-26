import * as React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Divider, ProfileList  } from '../../components';
import { getUserInfo } from '../../api/userApi';
import './Account.scss';

export const Account = (props) => {
    const [ userInfo, setUserInfo ] = React.useState({});
    
    React.useEffect(() => {
        loadUserInfo();
    }, [])

    const loadUserInfo = async () => {
        const userInfo = await getUserInfo();
        setUserInfo(userInfo);
    }
    
    return (
        <div className="account">
            <Avatar className="account-avatar" size='large' />
            <Divider className="account-top-divider" />
            <ProfileList accountData={userInfo}/>
        </div>
    );
};
