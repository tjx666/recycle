import * as React from 'react';
import PropTypes from 'prop-types';
import { SearchBar, Navbar } from '../../components';
import { Link } from 'react-router-dom';
import { headerStrings as strings } from '../../constants/strings';
import './Header.scss';


export const Header = (props) => {
    const { isLogin, avatar } = props;

    return (
        <header>
            <div className="header-left">
                <Link className="logo-text" to="/">{strings.title}</Link>
                <SearchBar />
            </div>
            { isLogin ? <Navbar avatar={avatar} /> : <Links/>}
        </header>
    )
}

Header.propTypes = {
    isLogin: PropTypes.bool,
    avatar: PropTypes.string,
}

Header.defaultProps = {
    avatar: 'https://i.loli.net/2019/03/24/5c972f8c535e4.png',
}


const Links = () => (
    <span className="links">
        <Link to="/login">{strings.login}</Link>
        <span>{' · '}</span>
        <Link to="/register">{strings.register}</Link>
    </span>
);
