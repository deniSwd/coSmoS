import React from 'react';
import style from './Users.module.css'
import axios from "axios";
import usersPhoto from "../../assets/my images/usersPhoto.jpg"

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div>
                {this. props.users.map(u => <div key={u.id}>
                    <div className={style.users}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto}/>
                            <div>
                                {u.followed ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
}
export default Users;
