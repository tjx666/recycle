import * as React from 'react';
import PropTypes from 'prop-types';
import {Iconfont} from '../iconfont/Iconfont';
import './BrandList.scss';

export const BrandList = (props) => {
    const { brandListData, } = props;
    const renderList = () => brandListData.map(itemData => {
        const { brand, logoLink } = itemData;
        return (
            <BrandListItem
                key={brand}
                brand={brand}
                logoLink={logoLink}    
            />
        );
    })
    
    return (
        <div className="brand-list">
            <div className="list-header">品牌</div>
            <div className="list-body">
                {renderList()}
            </div>
            <Iconfont className="down-arrow-icon" type="Doublearrowdown"/>
        </div>
    );
};

BrandList.propTypes = {
    brandListData: PropTypes.array, 
}

const BrandListItem = (props) => {
    const { logoLink, brand } = props;
    
    return (
        <div className="brand-list-item">
            <img src={logoLink} alt={brand}/>
            <span className="brand-text">{ brand }</span>
            &nbsp;&nbsp;
            <span className="right-arrow">></span>
        </div>
    )
}

BrandListItem.propTypes = {
    logoLink: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
}