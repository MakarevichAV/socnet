import React from 'react';
import { compose } from 'redux';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogues: state.dialoguesPage.dialogues
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect // HOC
)(SideBar);