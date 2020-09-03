import React from 'react';
import { sendMsgAC, changeNewMsgVal } from '../../../../redux/dialoguesReducer';
import SendArea from './SendArea';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        val: state.dialoguesPage.newMsgVal
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeVal: (val) => {
            dispatch(changeNewMsgVal(val));
        },
        sendMsg: () => {
            dispatch(sendMsgAC());
        }
    }
}

const SendAreaContainer = connect(mapStateToProps, mapDispatchToProps)(SendArea);

export default SendAreaContainer;