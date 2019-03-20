import * as React from 'react';
import { SearchBar } from '../../components';
import { Link } from 'react-router-dom';
import { headerStrings as strings} from '../../constants/strings';
import './Header.scss';

export const Header = (props) => {
  
  return (
    <header>
      <div className="header-left">
        <Link className="logo-text" to="/">{strings.title}</Link>
        <SearchBar/>
      </div>
      <span className="links">
        <Link to="/login">{strings.login}</Link>
        <span>{' · ' }</span>
        <Link to="/register">{strings.register}</Link>
      </span>
    </header>
  )
}