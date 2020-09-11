import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import s from './Login.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../utils/validators';
import { login } from '../../redux/authReducer';

const maxLength = maxLengthCreator(26);
const LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component={Input} validate={[required, maxLength]} className={s.input}
                name="email" placeholder="Email" type="email" />
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

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    return (
        <div className={`${s.loginWindow} container`}>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default connect(null, { login })(Login);