import React from 'react';
import SideBar from './SideBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogues: state.dialoguesPage.dialogues
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {}
// }

const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;