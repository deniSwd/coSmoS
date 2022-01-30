import React from 'react';
import style from "./Users.module.css";
import usersPhoto from "../../assets/my images/usersPhoto.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }
    return (
        <div>
            <div className={style.content}>
                {page.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                                 onClick={(event) => {
                                     props.onPostChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <div className={style.users}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto}/>
                        </NavLink>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/delete/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "c0d23f1d-fa0d-45e5-9de0-8d64b7d22b01"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "c0d23f1d-fa0d-45e5-9de0-8d64b7d22b01"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }

                                    })
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={style.users}>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status != null ? u.status : 'I am samurai!!!'}</div>
                        </div>
                        <div>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default Users