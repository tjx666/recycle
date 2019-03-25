import * as React from 'react';
import { DeviceTypeList, BrandList, DeviceList } from '../../components';
import { getBrandsByType } from '../../api/brandApi';
import { getDevicesByTypeAndBrand } from '../../api/deviceApi';
import './Home.scss';

export const Home = (props) => {
    const [ brandsListData, setBrandsListData ] = React.useState([]);
    const [ deviceListData, setDeviceListData ] = React.useState([]);

    const loadBrandListData = async() => {
        const brands = await getBrandsByType('phone');
        setBrandsListData([...brands, ...brands]);
    }

    const loadDeviceListData = async () => {
        const devices = await getDevicesByTypeAndBrand();
        setDeviceListData([...devices, ...devices, ...devices, ...devices, ...devices, ...devices].slice(1));
    }

    React.useEffect(() => {
        loadBrandListData();
        loadDeviceListData();
    }, []);
    
    return (
        <div className="home">
            <DeviceTypeList onSelectDeviceType={() => {}} />
            <div className="home-middle">
                <BrandList brandListData={brandsListData}/>
                <DeviceList deviceListData={deviceListData}/>
            </div>
        </div>
    )
};
