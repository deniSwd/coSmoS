import {useEffect, useState} from "react";


const ProfileStatus = (props) => {
   let [editMode, setState] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setState(true)
    }
   const  deactivateEditMode = () => {
        setState(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }


        return (
            <div>
                {!editMode ?
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "Add Status"}</span>
                    </div>
                    :
                    <div>
                        <input onChange= {onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    </div>
                }
            </div>
        )
    }


export default ProfileStatus;