import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../../common/FormsControls/FormsControls';
import { required } from '../../../../utils/validators/validators';
import s from './UserInfo.module.css';

const UserDataForm = (props) => {
    const [name, setName] = useState(props.name);
    const [contacts, setContacts] = useState(props.contacts);
    const changeValue = (e) => {
        setName(e.target.value);
    }
    const changeContact = (e) => {
        setContacts({
            ...contacts,
            [e.target.name]: e.target.value
        });
    }

    const submitData = () => {

    }
    const contactInputs = Object.keys(props.contacts).map(key => {
        return (
            <Field key={key} component={Input}  className={s.editVal}
                name={key} placeholder={key} type="text" value={contacts[key] ? contacts[key] : ''} />
            // <input key={key} className={s.editVal} name={key} placeholder={key} value={contacts[key] ? contacts[key] : ''} onChange={changeContact} />
        )
    });
    return (
        <form onSubmit={submitData}>
            <Field component={Input} validate={[required]} className={s.name}
                name="name" placeholder="Имя" type="text" />
            {/* <input type="text" className={s.name} value={name} placeholder="Имя" onChange={changeValue} /> */}
            <div className={s.contacts}>
                <h3 className={s.title}>Контакты:</h3>
                {contactInputs}
            </div>
            <button type="submit" className={`${s.btn} ${s.type1}`}>Сохранить</button>
        </form>
    )
}

const UserReduxForm = reduxForm({ form: 'edit-user-info' })(UserDataForm);

export default UserReduxForm;