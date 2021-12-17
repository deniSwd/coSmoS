import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path= '/dialogs/'+ props.id;
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

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogsItem name='Гагарин' id='1'/>
                <DialogsItem name='Титов' id='2'/>
                <DialogsItem name='Терешкова' id='3'/>
                <DialogsItem name='Леонов' id='4'/>
                <DialogsItem name='Гречко' id='5'/>
            </div>
            <div className={style.messages}>
                <Message message ='I love props!?'/>
                <Message message ='I love props!?'/>
                <Message message ='I love props!?'/>
            </div>

        </div>
    );
}
export default Dialogs;