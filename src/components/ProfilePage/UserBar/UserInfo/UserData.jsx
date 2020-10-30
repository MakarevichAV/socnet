import React from 'react';
import s from './UserInfo.module.css';

import Contact from './Contact';

const UserData = (props) => {
    return (
        <>
            <p className={s.name}>{props.name}</p>
            <div className={s.contacts}>
                {Object.keys(props.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.contacts[key]} />
                })}
            </div>
            {props.isOwner && 
                <button className={`${s.btn} ${s.type1}`} onClick={props.editModeOn}>Редактировать</button>
            }
        </>
    )
}

export default UserData;