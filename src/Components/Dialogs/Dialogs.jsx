import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}
let dialogs = [
    {id: 1, name: 'Гагарин'},
    {id: 2, name: 'Титов'},
    {id: 3, name: 'Терешкова'},
    {id: 4, name: 'Леонов'},
    {id: 5, name: 'Гречко'}
]
let messages = [
    {id: 1, message: 'I love props!?'},
    {id: 2, message: 'I love props!?'},
    {id: 3, message: 'I love props!?'},
    {id: 4, message: 'I love props!?'}
]
let dialogsElements = dialogs.map(
    d => <DialogsItem name={d.name} id={d.id}/>
)
let messagesElements = messages.map(
    m => <Message message= {m.message}/>
)

const Dialogs = (props) => {
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