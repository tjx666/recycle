import * as React from 'react';
import PropTypes from 'prop-types';
import { Iconfont } from '../iconfont/Iconfont';
import './SearchBar.scss';
const  {headerStrings: { searchBar: strings}} = require('../../constants/strings');

export const SearchBar = (props) => {
    const { placeholder } = props;
    const [isFocus, setIsFocus] = React.useState(false);

    const handleFocus = () => {
        setIsFocus(true);
    }

    const handleBlur = () => {
        setIsFocus(false);
    }
    
    return (
        <div className={`search-bar ${isFocus && 'search-bar-focus'}`} >
            <Iconfont className="search-icon" type="search"/>
            <input type="text" onFocus={handleFocus} onBlur={handleBlur} placeholder={placeholder}/>
        </div>
    );
};

SearchBar.propTypes = {
    placeholder: PropTypes.string, 
};

SearchBar.defaultProps = {
    placeholder: strings.placeholder,
}