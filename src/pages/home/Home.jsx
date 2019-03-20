import * as React from 'react';
import { DeviceTypeList, BrandList } from '../../components';
import { getBrandsByType } from '../../api/brandApi';
import './Home.scss';

export const Home = (props) => {
    const [brandsListData, setBrandsListData] = React.useState([]);

    const loadBrandListData = async() => {
        const brands = await getBrandsByType('phone');
        setBrandsListData([...brands, ...brands]);
    }

    React.useEffect(() => {
        loadBrandListData();
    }, []);
    
    return (
        <main className="home">
            <DeviceTypeList/>
            <div className="home-middle">
                <BrandList brandListData={brandsListData}/>
            </div>
        </main>
    )
};
