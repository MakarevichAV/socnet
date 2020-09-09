import React from 'react';
import { compose } from 'redux';
import { sendMsgAC, changeNewMsgVal } from '../../../../redux/dialoguesReducer';
import SendArea from './SendArea';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect // HOC
)(SendArea);