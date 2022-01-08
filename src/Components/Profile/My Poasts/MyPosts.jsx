import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";


const MyPosts = (props) => {
    let postsElements = props.posts.map(
        p => <Post message={p.message} likeAmount={p.likeAmount}/>
    )

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div>
            <div className={style.postBlock}>
                <div>
                    <h2>My Posts</h2>
                </div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
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