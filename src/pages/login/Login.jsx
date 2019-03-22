import * as React from 'react';
import { Card } from '../../components';
import './Login.scss';


export const Login = (props) => {
   const isLogin = props.location.pathname.slice(1).trim() === 'login';

    return (
        <Card 
            title={ isLogin ? '登入' : '注册' }
            bordered={true}
            style={loginStyle}
        >
            <LoginForm/>
        </Card>
    );
};

const loginStyle = {
    // width: '400'
}

const LoginForm = () => {
    return (
        <form>
            <div><input type="email"/></div>
            <div><input type="password"/></div>
            <button>登入</button>
        </form>
    );
}