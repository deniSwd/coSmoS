import React from 'react';
import style from './Users.module.css'
import axios from "axios";
import usersPhoto from "../../assets/my images/usersPhoto.jpg"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPostChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let page = []
        for (let i = 1; i <= pageCount; i++) {
            page.push(i)
        }
        return (
            <div>
                <div className={style.content}>
                    {page.map(p => {
                        return <span className={this.props.currentPage === p && style.selectedPage}
                                     onClick={(event) => {this.onPostChanged(p)}}>{p}</span>})}
                </div>
                {this.props.users.map(u => <div key={u.id}>
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
