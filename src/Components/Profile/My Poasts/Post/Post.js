import React from "react";
import style from './Post.module.css'
import userimg from '../../../../assets/my images/users.jpg';
import likeimg from '../../../../assets/my images/like- original.jpg'

const Post = () => {
    return (
        <div className={style.item}>
            <img src={userimg}/>
            <div>
                Post 1
            </div>
            <div>
            <img src={likeimg} className={style.like}/>
            </div>
        </div>
    )
}

export default Post;