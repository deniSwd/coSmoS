import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(
        d => <DialogsItem name={d.name} id={d.id}/>
    )
    let messagesElements = state.messages.map(
        m => <Message message={m.message}/>
    )
    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (event) => {
        let mess = event.target.value;
        props.updateNewMessageText(mess);
    }

    if(!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange}
                              value={state.newMessageText}/>
                    <div>
                        <button onClick={onAddMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;