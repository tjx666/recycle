import * as React from 'react';
import PropTypes from 'prop-types';
import { Iconfont } from '../iconfont/Iconfont';
import './BrandList.scss';

export const BrandList = (props) => {
    const { brandListData, onSelectBrand } = props;

    const [ selectedBrand, setSelectedBrand] = React.useState('全部');
    const [showDownPullArrow, setShowDownPullArrow] = React.useState(true);
    const listBody = React.useRef(null);

    React.useEffect(() => {
        const { scrollHeight, clientHeight } = listBody.current;
        
        if (scrollHeight === clientHeight) setShowDownPullArrow(false);
    }, [brandListData]);


    const handleScroll = (event) => {
        const { clientHeight, scrollHeight, scrollTop } = event.target;

        if (scrollHeight === Math.round(clientHeight + scrollTop) && showDownPullArrow) {
            // 滚动条到底了
            setShowDownPullArrow(false);
        } else if (!showDownPullArrow) {
            setShowDownPullArrow(true);
        }
    }

    const handleSelect = (brand) => {
        setSelectedBrand(brand);
        onSelectBrand(brand);
    }

    const renderList = () => brandListData.map((itemData, index) => {
        const { brand, logoLink } = itemData;
        return (
            <BrandListItem
                key={index}
                brand={brand}
                logoLink={logoLink}
                selected={brand === selectedBrand}
                onSelect={handleSelect}
            />
        );
    })

    return (
        <div className="brand-list">
            <div className="list-header">品牌</div>
            <div ref={listBody} className="list-body" onScroll={handleScroll}>
                {renderList()}
            </div>
            <div className="list-footer">{showDownPullArrow && <Iconfont className="down-arrow-icon" type="Doublearrowdown" />}</div>
        </div>
    );
};

BrandList.propTypes = {
    brandListData: PropTypes.array.isRequired,
    onSelectBrand: PropTypes.func.isRequired,
}


const BrandListItem = (props) => {
    const { logoLink, brand, selected, onSelect } = props;

    const handleClick = () => {
        onSelect(brand);
    }

    return (
        <div
            className={`brand-list-item ${selected ? 'brand-list-item-selected' : ''}`}
            onClick={handleClick}
        >
            <img src={logoLink} alt={brand} />
            <span className="brand-text">{brand}</span>
            &nbsp;&nbsp;
            <span className="right-arrow">></span>
        </div>
    )
}

BrandListItem.propTypes = {
    logoLink: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
}