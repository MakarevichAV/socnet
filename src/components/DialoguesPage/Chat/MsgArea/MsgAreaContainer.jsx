import React from 'react';
import { compose } from 'redux';
import MsgArea from './MsgArea';
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        msgs: state.dialoguesPage.msgs
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect // HOC
)(MsgArea);