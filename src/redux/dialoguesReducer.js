const SEND_MSG = 'SEND_MSG';

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
    ]
}

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MSG:
            const newMsg = {
                id: 7,
                txt: action.newMsgBody,
                direction: 'sended'
            };
            return {
                ...state,
                msgs: [...state.msgs, newMsg]
            };
        default:
            return state;
    }
}

export const sendMsgAC = (newMsgBody) => ({ type: SEND_MSG, newMsgBody });

export default dialoguesReducer;