import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(
        d => <DialogsItem name={d.name} id={d.id}/>
    )
    let messagesElements = props.messagesPage.messages.map(
        m => <Message message={m.message}/>
    )
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }
    let onMessageChange = () => {
        let mess = newMessageElement.current.value;
        props.dispatch({
            type: 'UPDATE-NEW-MESSAGE-TEXT',
            mess: mess
        });
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange}
                              ref={newMessageElement}
                              value={props.messagesPage.newMessageText}
                    />
                    <div>
                        <button onClick={addMessage}>Add mesage</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Dialogs;