import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.dialogsFromIndex.map(
        d => <DialogsItem name={d.name} id={d.id}/>
    )
    let messagesElements = props.messageFromIndex.map(
        m => <Message message= {m.message}/>
    )
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>

        </div>
    );
}
export default Dialogs;