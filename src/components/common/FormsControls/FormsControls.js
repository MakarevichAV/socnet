import React from 'react';
import s from './FormControls.module.css';

export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={s.textarea + ' ' + (meta.touched && meta.error && s.error)}>
            <textarea {...input} {...props} />
            {meta.touched && meta.error && <span className={s.errorMsg}>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    return (
        <div className={s.input + ' ' + (meta.touched && meta.error && s.error)}>
            <input {...input} {...props} />
            {meta.touched && meta.error && <span className={s.errorMsg}>{meta.error}</span>}
        </div>
    )
}