import React from'react';
import  style from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    Гагарин
                </div>
                <div className={style.dialog}>
                    Гагарин
                </div>
                <div className={style.dialog}>
                    Гагарин
                </div>
                <div className={style.dialog}>
                    Гагарин
                </div>
                <div className={style.dialog}>
                    Гагарин
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    different messages
                </div>
                <div className={style.message}>
                    different messages
                </div>
                <div className={style.message}>
                    different messages
                </div>
            </div>

        </div>
    );
}
export default Dialogs;