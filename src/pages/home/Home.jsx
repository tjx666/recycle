import * as React from 'react';
import { DeviceTypeList, BrandList, DeviceList } from '../../components';
import { getBrandsByType } from '../../api/brandApi';
import { getDevicesByTypeAndBrand } from '../../api/deviceApi';
import { toast } from 'react-toastify';
import './Home.scss';

export const Home = (props) => {
    const [brandsListData, setBrandsListData] = React.useState([]);
    const [deviceListData, setDeviceListData] = React.useState([]);

    const loadBrandListData = async () => {
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

    const handleSelectDeviceType = (type) => {

    }

    const handleSelectBrand = (brand) => {

    }

    const handleClickReadMore = () => {
        toast('到底了!', {
            className: 'arrived-bottom-toast',
            position: "top-center",
        });
        setDeviceListData([...deviceListData, ...deviceListData]);
    }

    return (
        <div className="home">
            <DeviceTypeList onSelectDeviceType={handleSelectDeviceType} />
            <div className="home-middle">
                <BrandList
                    brandListData={brandsListData}
                    onSelectBrand={handleSelectBrand}
                />
                <DeviceList
                    deviceListData={deviceListData}
                    onClickReadMore={handleClickReadMore}
                />
            </div>
        </div>
    )
};
