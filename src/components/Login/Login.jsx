import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import s from './Login.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component={Input} validate={[required]} className={s.input}
                name="email" placeholder="Email" type="email" />
            <Field component={Input} validate={[required]} type="password" className={s.input}
                name="password" placeholder="password" />
            <div className={s.checkbox}>
                <label>
                    <Field component={'input'} type="checkbox" name="rememberMe" />
                    remember me
                </label>
            </div>
            {props.error && <p className={s.error}>{props.error}</p>}
            <button className={`${s.input} ${s.btn}`}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div className={`${s.loginWindow} container`}>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mstp = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mstp, { login })(Login);