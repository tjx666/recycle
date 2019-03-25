import * as React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Divider  } from '../../components';
import './Account.scss';

export const Account = (props) => {
    return (
        <div className="account">
            <Avatar className="account-avatar" size='large' />
            <Divider className="account-top-divider" />
            
        </div>
    );
};
