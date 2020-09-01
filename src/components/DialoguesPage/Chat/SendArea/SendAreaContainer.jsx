import React from 'react';
import { sendMsgAC, changeNewMsgVal } from '../../../../redux/dialoguesReducer';
import SendArea from './SendArea';

const SendAreaContainer = (props) => {
    
    let state = props.store.getState();

    const sendMsg = () => {
        props.store.dispatch(sendMsgAC());
    }

    const changeVal = (val) => {
        props.store.dispatch(changeNewMsgVal(val));
    }

    return (
        <SendArea val={state.dialoguesPage.newMsgVal} 
            changeVal={changeVal} sendMsg={sendMsg} />
    )
}

export default SendAreaContainer;