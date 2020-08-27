import React from 'react';
import PostInfo from './PostInfo/PostInfo';
import PostTxt from './PostTxt/PostTxt';

const Post = ({ msg, name, date }) => {
    return (
        <>
            <PostInfo name={name} date={date} />
            <PostTxt msg={msg} />
        </>
    )
}

export default Post;