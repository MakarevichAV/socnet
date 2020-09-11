import React from 'react';
import { compose } from 'redux';
import { sendMsgAC } from '../../../../redux/dialoguesReducer';
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
        sendMsg: (newMsgBody) => {
            dispatch(sendMsgAC(newMsgBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect // HOC
)(SendArea);