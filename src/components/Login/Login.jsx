import React from 'react';
import { reduxForm, Field } from 'redux-form';

import s from './Login.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../utils/validators';

const maxLength = maxLengthCreator(26);
const LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component={Input} validate={[required, maxLength]} className={s.input}
                name="login" placeholder="login" />
            <Field component={Input} validate={[required, maxLength]} type="password" className={s.input}
                name="password" placeholder="password" />
            <div className={s.checkbox}>
                <label>
                    <Field component={'input'} type="checkbox" name="rememberMe" />
                    remember me
                </label>
            </div>
            <button className={`${s.input} ${s.btn}`}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={`${s.loginWindow} container`}>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;