import React from 'react';
import {addMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)