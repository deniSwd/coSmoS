import React from "react";
import style from './Post.module.css'
import userimg from '../../../../assets/my images/users.jpg';
import likeimg from '../../../../assets/my images/like- original.jpg'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={userimg}/>
            <div>
                {props.message}
            </div>
            <div>
            <img src={likeimg} className={style.like}/>
                {props.likeAmount}
            </div>
        </div>
    )
}

export default Post;