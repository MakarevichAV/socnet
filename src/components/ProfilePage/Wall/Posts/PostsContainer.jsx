import React from 'react';
import Posts from './Posts';
import { addPostAC, changeNewPostVal } from '../../../../redux/profileReducer';
import StoreContext from '../../../../StoreContext';

const PostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    const addPost = () => {
                        store.dispatch(addPostAC());
                    }
                    const changePostVal = (val) => {
                        store.dispatch(changeNewPostVal(val));
                    }
                    return (
                        <Posts  posts={state.profilePage.posts}
                                newPostVal={state.profilePage.newPostVal}
                                addPost={addPost}
                                changePostVal={changePostVal} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;