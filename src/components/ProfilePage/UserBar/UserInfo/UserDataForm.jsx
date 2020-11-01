import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../../common/FormsControls/FormsControls';
import { required } from '../../../../utils/validators/validators';
import s from './UserInfo.module.css';
import { connect } from 'react-redux';

const Form = (props) => {
    const contactInputs = Object.keys(props.contacts).map(key => {
        return (
            <Field key={key} component={Input} className={s.editVal}
                name={key} placeholder={key} type="text" value={props.contacts[key] ? props.contacts[key] : ''} />
        )
    });
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Input} validate={[required]} className={s.name}
                name="fullName" placeholder="Имя" type="text" />
            <div className={s.contacts}>
                <h3 className={s.title}>Контакты:</h3>
                {contactInputs}
            </div>
            <button className={`${s.btn} ${s.type1}`}>Сохранить</button>
        </form>
    )
}

const UserReduxForm = reduxForm({ form: 'edit-user-info' })(Form);

const UserDataForm = (props) => {
    const onSubmit = (formData) => {
        props.saveProfileBarData(formData);
        props.editModeOff();
    }
    return (
        <UserReduxForm onSubmit={onSubmit} {...props} />
    )
}

const mstp = (state) => {
    return {
        initialValues: {
            fullName: state.profilePage.profile.fullName,
            ...state.profilePage.profile.contacts
        },
        dataForServer: state.profilePage.profile
    }
};

export default connect(mstp, {})(UserDataForm);


