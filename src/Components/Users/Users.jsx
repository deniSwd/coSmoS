import React from 'react';
import style from "./Users.module.css";
import usersPhoto from "../../assets/my images/usersPhoto.jpg";

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
                        <img src={u.photos.small != null ? u.photos.small : usersPhoto}/>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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