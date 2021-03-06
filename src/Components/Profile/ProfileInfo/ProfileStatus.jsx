import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'


const ProfileStatus = (props) => {
    let [editMode, setState] = useState(false)
    let [status, setStatus] = useState(props.status)
    const {userId} = useParams()
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (!userId) setState(true)
    }
    const deactivateEditMode = () => {
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
                    <span onDoubleClick={activateEditMode}><b>Status: </b>{props.status || "Add Status"}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    )
}


export default ProfileStatus;