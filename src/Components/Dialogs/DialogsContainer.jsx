import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
let state =props.store.getState().messagesPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (mess) => {
        props.store.dispatch(updateNewMessageTextActionCreator(mess));
    }
    return ( <Dialogs addMessage={addMessage}
                      updateNewMessageText={onMessageChange}
                      messagesPage={state}
    />);
}
export default DialogsContainer;