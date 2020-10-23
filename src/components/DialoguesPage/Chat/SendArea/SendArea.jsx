import React from 'react';
import s from './SendArea.module.css';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { required } from '../../../../utils/validators/validators';

const SendArea = (props) => {

    const addNewMsg = (formData) => {
        props.sendMsg(formData.newMsgBody);
    }

    return (
        <AddMsgFormRedux onSubmit={addNewMsg} />
    )
}

const AddMsgForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.sendArea}>
            <Field name="newMsgBody" component="textarea" value={props.val} className={s.txtarea} 
                validate={[required]} />
            <button className={s.btn}></button>
        </form>
    )
}

const AddMsgFormRedux = reduxForm({ form: 'dialogueAddMsgForm' })(AddMsgForm);

export default SendArea;