const SEND_MSG = 'SEND_MSG';
const CHANGE_NEW_MSG_VAL = 'CHANGE_NEW_MSG_VAL';

let initialState = {
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

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MSG:
            const newMsg = {
                id: 7,
                txt: state.newMsgVal,
                direction: 'sended'
            };
            state.msgs.push(newMsg);
            state.newMsgVal = '';
            return state;
        case CHANGE_NEW_MSG_VAL:
            state.newMsgVal = action.newMsg;
            return state;
        default:
            return state;
    }
}

export const sendMsgAC = () => ({ type: SEND_MSG });
export const changeNewMsgVal = (newMsg) => ({ type: CHANGE_NEW_MSG_VAL, newMsg: newMsg });

export default dialoguesReducer;