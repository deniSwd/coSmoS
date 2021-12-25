import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(
        d => <DialogsItem name={d.name} id={d.id}/>
    )
    let messagesElements = props.state.messages.map(
        m => <Message message={m.message}/>
    )
    let newMessageElement= React.createRef();
    let addMessage= () => {
        let mess= newMessageElement.current.value;
        alert (mess);
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}>New message</textarea>
                    <div>
                        <button onClick={addMessage}>Add mesage</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Dialogs;