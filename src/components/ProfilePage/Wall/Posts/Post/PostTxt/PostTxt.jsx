import React from 'react';
import s from './PostTxt.module.css';

const PostTxt = (props) => {
    return (
        <div className={s.text}>
            {props.msg}
        </div>
    )
}

export default PostTxt;