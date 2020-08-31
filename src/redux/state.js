const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_VAL = 'CHANGE_NEW_POST_VAL';
const SEND_MSG = 'SEND_MSG';
const CHANGE_NEW_MSG_VAL = 'CHANGE_NEW_MSG_VAL';


let store = {
    _state: {
        profilePage: {
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
            newPostVal: ''
        },
        dialoguesPage: {
            dialogues: [
                { id: 1, name: 'Ксения' },
                { id: 2, name: 'Игорь' },
                { id: 3, name: 'Марина' },
                { id: 4, name: 'Галина' },
                { id: 5, name: 'Твикс' }
            ],
            msgs: [
                {
                    id: 1,
                    txt: 'Отправленное сообщение 1. Бла бла бла. Бла бла бла',
                    direction: 'sended'
                },
                {
                    id: 2,
                    txt: 'Отправленное сообщение 2. Бла бла бла. Бла бла бла',
                    direction: 'sended'
                },
                {
                    id: 3,
                    txt: 'Отправленное сообщение 3. Бла бла бла. Бла бла бла. Кто понял жизнь, работать перестал',
                    direction: 'sended'
                },
                {
                    id: 4,
                    txt: 'Принятое сообщение 1. Бла бла бла. Бла бла бла',
                    direction: 'received'
                },
                {
                    id: 5,
                    txt: 'Отправленное сообщение 4. Бла бла бла. Бла бла бла',
                    direction: 'sended'
                },
                {
                    id: 6,
                    txt: 'Принятое сообщение 2. Бла бла бла. Бла бла бла',
                    direction: 'received'
                }
            ],
            newMsgVal: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                msg: this._state.profilePage.newPostVal,
                name: 'Макар',
                date: '28 августа в 14:55',
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostVal = '';
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_NEW_POST_VAL) {
            this._state.profilePage.newPostVal = action.newVal;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MSG) {
            const newMsg = {
                id: 7,
                txt: this._state.dialoguesPage.newMsgVal,
                direction: 'sended'
            };
            this._state.dialoguesPage.msgs.push(newMsg);
            this._state.dialoguesPage.newMsgVal = '';
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_NEW_MSG_VAL) {
            this._state.dialoguesPage.newMsgVal = action.newMsg;
            this._callSubscriber(this._state);
        }
    }
}

// action creators
export const addPostAC = () => ({ type: ADD_POST });
export const changeNewPostVal = (newVal) => ({ type: CHANGE_NEW_POST_VAL, newVal: newVal });
export const sendMsgAC = () => ({ type: SEND_MSG });
export const changeNewMsgVal = (newMsg) => ({ type: CHANGE_NEW_MSG_VAL, newMsg: newMsg });

export default store;