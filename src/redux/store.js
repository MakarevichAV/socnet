import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";
import sidebarReducer from "./sidebarReducer";
import authReducer from "./authReducer";

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
        },
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.auth = authReducer(this._state.auth, action);
        
        this._callSubscriber(this._state);
    
    }
}

export default store;