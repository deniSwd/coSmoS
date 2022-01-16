import React from 'react';
import style from './Users.module.css'

const Users = (props) => {
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <div className={style.users}>
                    <div>
                        <img src={u.photoUser}/>
                        <div>
                            {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button>
                                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </div>
                    <div className={style.users}>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default Users;