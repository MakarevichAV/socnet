import React from 'react';
import PostInfo from './PostInfo/PostInfo';
import PostTxt from './PostTxt/PostTxt';

const Post = ({msg}) => {
    return (
        <>
            <PostInfo />
            <PostTxt msg={msg} />
        </>
    )
}

export default Post;