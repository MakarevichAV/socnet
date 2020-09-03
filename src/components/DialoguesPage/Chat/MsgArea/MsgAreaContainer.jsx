import React from 'react';
import MsgArea from './MsgArea';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        msgs: state.dialoguesPage.msgs
    }
}
const MsgAreaContainer = connect(mapStateToProps)(MsgArea);

export default MsgAreaContainer;