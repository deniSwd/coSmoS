import React from 'react';
import style from "./Users.module.css";
import usersPhoto from "../../assets/my images/usersPhoto.jpg";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div key={user.id}>
                <div className={style.users}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : usersPhoto}/>
                        </NavLink>
                        <div>
                            {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)}
                                                     onClick={() => {
                                                         unfollow(user.id)
                                                     }}>UnFollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}>Follow</button>}
                        </div>
                    </div>
                    <div className={style.users}>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status != null ? user.status : 'I am samurai!!!'}</div>
                        </div>
                        <div>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User