import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Card, Button } from '../../components';
import './Login.scss';


export const Login = (props) => {
    const isLogin = props.location.pathname.slice(1).trim() === 'login';
    const initialValues = { email: '', password: '' };

    const validator = values => {
        let errors = {};
        if (!values.email) {
            errors.email = '邮箱地址必须填写';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = '无效邮箱地址';
        }

        if (!values.password) {
            errors.password = '密码必须填写';
        }

        return errors;
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    const Title = () => <div className="login-card-header">{isLogin ? '登入' : '注册'}</div>;
    return (
        <Card
            key={props.location.pathname}
            className='login-card'
            title={<Title />}
            bordered={true}
        >
            <Formik
                initialValues={initialValues}
                validate={validator}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="login-form">
                        <Field  type="email" name="email" placeholder=" 邮箱" />
                        <ErrorMessage name="email" component="label" />
                        <Field type="password" name="password" placeholder=" 密码" />
                        <ErrorMessage name="password" component="label" />
                        <Button className="submit-button" disabled={isSubmitting} type="primary">Submit</Button>
                    </Form>
                )}
            </Formik>
        </Card>
    );
};