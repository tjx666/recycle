import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Card, Button, Modal, Spin } from '../../components';
import './Login.scss';

export const Login = (props) => {
    const isLogin = props.location.pathname.slice(1).trim() === 'login';
    const initialValues = { email: '', password: '' };

    const validator = values => {
        const { email, password, repeatPassword } = values;
        let errors = {};
        if (!email) {
            errors.email = '邮箱地址必须填写';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            errors.email = '无效邮箱地址';
        }

        if (!password) {
            errors.password = '密码必须填写';
        }

        if (!isLogin) {
            if (!repeatPassword) {
                errors.repeatPassword = '密码必须填写';
            } else if (repeatPassword !== password) {
                errors.repeatPassword = '两次密码不一致'
            }
        }

        return errors;
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    const renderForm = ({ isSubmitting }) => (
        <Form className="login-form">
            <Field type="email" name="email" placeholder=" 邮箱" />
            <ErrorMessage name="email" component="label" />
            <Field type="password" name="password" placeholder=" 密码" />
            <ErrorMessage name="password" component="label" />
            {
                !isLogin && <>
                    <Field type="password" name="repeatPassword" placeholder=" 重复一遍密码" />
                    <ErrorMessage name="repeatPassword" component="label" />
                </>
            }
            <Modal title="测试模态框" isOpen={false}></Modal>
            <Button className="submit-button" disabled={isSubmitting} type="primary">Submit</Button>
        </Form>
    )

    const Title = () => <div className="login-card-header">{isLogin ? '登入' : '注册'}</div>;
    return (
        <Card
            key={props.location.pathname}
            className={`login-card ${!isLogin ? 'register-card' : ''}`}
            title={<Title />}
            bordered={true}
        >
            <Spin
                type={'pacman'}
                showSpin={false}
                fadeIn={'half'}
                color='lightseagreen'
                />
            <Formik
                initialValues={initialValues}
                validate={validator}
                onSubmit={handleSubmit}
            >
                {renderForm}
            </Formik>
        </Card>
    );
};