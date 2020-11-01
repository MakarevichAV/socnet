import { userAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DEL_POST = 'DEL_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';
const SAVE_PROFILE = 'SAVE_PROFILE';

let initialState = {
    profile: null,
    posts: [
        {
            id: 1,
            msg: 'Пост 1333',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 23
        },
        {
            id: 2,
            msg: 'Пост 2. Бла бла бла. Я сказал бла блаблабла',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 12
        },
        {
            id: 3,
            msg: 'Пост 3',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 6
        },
        {
            id: 4,
            msg: 'Пост 4',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 17
        }
    ],
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                msg: action.newPostText,
                name: 'Макар',
                date: '15 сентября в 13:57',
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DEL_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        default:
            return state;
    }
}

export const addPostAC = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });
export const setStatus = (status) => ({ type: SET_STATUS, status: status });
export const delPost = (postId) => ({ type: DEL_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO, photos });
// export const saveProfileSuccess = (data) => ({type: SAVE_PROFILE, data});

// Санки 
export const getUserProfile = (userId) => async (dispatch) => {
    let profileData = await userAPI.getProfile(userId);
    dispatch(setUserProfile(profileData));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfileBarData = (formData) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const objForServer = getState().profilePage.profile;
    const name = formData.fullName;
    delete formData.fullName;
    let response = await profileAPI.saveProfile({
        ...objForServer,
        fullName: name,
        contacts: formData
    });
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
} 



export default profileReducer;