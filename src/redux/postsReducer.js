const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_VAL = 'CHANGE_NEW_POST_VAL';

const postsReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                msg: state.newPostVal,
                name: 'Макар',
                date: '28 августа в 14:55',
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostVal = '';
            return state;
        case CHANGE_NEW_POST_VAL:
            state.newPostVal = action.newVal;
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => ({ type: ADD_POST });
export const changeNewPostVal = (newVal) => ({ type: CHANGE_NEW_POST_VAL, newVal: newVal });

export default postsReducer;