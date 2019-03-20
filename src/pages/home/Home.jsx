import * as React from 'react';
import { DeviceTypeList, BrandList } from '../../components';
import './Home.scss';

export const Home = (props) => {
    return (
        <main className="home">
            <DeviceTypeList/>
            <div className="home-middle">
                <BrandList/>
            </div>
        </main>
    )
};
