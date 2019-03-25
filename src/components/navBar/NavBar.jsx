import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Iconfont } from '../index.js'
import './NavBar.scss';

export const NavBar = (props) => {
    const { avatar } = props;
    
    return (
        <nav className="navbar">
            <NavLink className="nav-item" to="/account"><img className="avatar" src={avatar} alt="头像加载中..."/></NavLink>
            <NavLink className="nav-item" to="/deals"><Iconfont type="xiaoxi"/></NavLink>
            <NavLink className="nav-item" to="/message"><Iconfont type="gouwuche"/></NavLink>
            <Iconfont className="nav-item" type="logout"/>
        </nav>
    )
}

NavBar.propTypes = {
    avatar: PropTypes.string,
}