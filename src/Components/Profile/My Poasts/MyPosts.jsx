import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

let posts = [
    {id: 1, message: 'What is you name?', likeAmount: '10'},
    {id: 2, message: 'How are you?', likeAmount: '15'}
]
let postsElements = posts.map (
    p =>  <Post message={p.message} likeAmount={p.likeAmount}/>
)

const MyPosts = () => {
    ''
    return (
        <div>
            <div className={style.postBlock}>
                <div>
                    <h2>My Posts</h2>
                </div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={style.content}>
                New Posts
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;