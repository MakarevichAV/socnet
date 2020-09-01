const SEND_MSG = 'SEND_MSG';
const CHANGE_NEW_MSG_VAL = 'CHANGE_NEW_MSG_VAL';

const dialoguesReducer = (state, action) => {
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