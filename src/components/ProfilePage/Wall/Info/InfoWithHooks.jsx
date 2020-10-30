import React, { useState, useEffect } from 'react';
import s from './Info.module.css';

const Info = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => { 
        setStatus(props.status);
    }, [props.status]);
    const editModeOn = () => {
        setEditMode(true);
    }
    const editModeOff = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const changeStatusInputVal = (e) => {
        setStatus(e.target.value);
    }
    return (
        <>
            {!editMode &&
                <p className={s.status} onClick={editModeOn} >
                    <span className={s.key}>Статус:</span> {status}
                </p>}
            {editMode &&
                <input className={s.input} autoFocus={true} value={status}
                    onBlur={editModeOff} onChange={changeStatusInputVal} />}
            <div className={s.infoBlock}>
                <p className={s.head}>Работа</p>
                <p className={s.jobStatus}>
                    {props.jobFlag ? 'Ищу работу' : 'Трудоустроен'}
                </p>
                <p className={s.description}>
                    {props.jobDescription ? props.jobDescription : null}
                </p>
            </div>
        </>
    )
}

export default Info;