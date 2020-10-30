import React from 'react';
import s from './UserInfo.module.css';

const Contact = ({contactTitle, contactValue}) => {
    return (
        <a className={`${s.contactIcon} ${contactTitle} 
            ${contactValue || s.unvisible}`} href={contactValue}> </a>
    )
}

export default Contact;