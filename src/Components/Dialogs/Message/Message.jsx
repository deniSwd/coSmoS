import React from 'react';
import style from './../Dialogs.module.css';
import {Redirect} from "react-router-dom";




const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

export default Message;