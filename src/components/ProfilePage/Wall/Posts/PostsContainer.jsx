import React from 'react';
import Posts from './Posts';
import { addPostAC, changeNewPostVal } from '../../../../redux/profileReducer';

const PostsContainer = (props) => {
    
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostAC());
    }

    const changePostVal = (val) => {
        props.store.dispatch(changeNewPostVal(val));
    }

    return (
        <Posts posts={state.profilePage.posts} newPostVal={state.profilePage.newPostVal}
            addPost={addPost} changePostVal={changePostVal}/>
    )
}

export default PostsContainer;