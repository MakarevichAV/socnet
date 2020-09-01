import React from 'react';
import { sendMsgAC, changeNewMsgVal } from '../../../../redux/dialoguesReducer';
import SendArea from './SendArea';
import StoreContext from '../../../../StoreContext';

const SendAreaContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    const sendMsg = () => {
                        store.dispatch(sendMsgAC());
                    }
                    const changeVal = (val) => {
                        store.dispatch(changeNewMsgVal(val));
                    }
                    return (
                        <SendArea   val={state.dialoguesPage.newMsgVal}
                                    changeVal={changeVal} 
                                    sendMsg={sendMsg} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default SendAreaContainer;