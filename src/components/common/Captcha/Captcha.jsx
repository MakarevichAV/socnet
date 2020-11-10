import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';
import s from './Captcha.module.css';

const Captcha = ({ captchaUrl }) => {
    return (
        <div className={s.captcha}>
            <img className={s.picture} src={captchaUrl} alt="captcha не отображается" />
            <Field component={Input} validate={[required]} className={s.input}
                name="captcha" placeholder="Введите текст с картинки" type="text" />
        </div>
    )
}

export default Captcha;