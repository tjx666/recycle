import * as React from 'react';
import PropTypes from 'prop-types';

export const ProfileList = (props) => {
    return (
        <div className="profile-list">

        </div>
    );
}

ProfileList.propTypes = {
    accountData: PropTypes.object,
}


const ProfileItem = (props) => {
    return (
        <div className="profile-item">
        </div>
    )
}

ProfileItem.propTypes = {
    name: PropTypes.string.isRequired,
}