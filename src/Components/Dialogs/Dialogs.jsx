import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(
        d => <DialogsItem name={d.name} id={d.id}/>
    )
    let messagesElements = state.messages.map(
        m => <Message message={m.message}/>
    )
    let addMessageDialogs = (values) => {
        props.addMessage(values.newMessageText)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddMessageDialogsFormRedux onSubmit={addMessageDialogs}/>
            </div>
        </div>
    );
}


const AddMessageDialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageText'}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>

    )
}
const AddMessageDialogsFormRedux = reduxForm({form: 'addMessageForm'})(AddMessageDialogsForm)

export default Dialogs;