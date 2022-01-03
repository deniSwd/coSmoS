import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.posts.map(
        p => <Post message={p.message} likeAmount={p.likeAmount}/>
    )
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <div className={style.postBlock}>
                <div>
                    <h2>My Posts</h2>
                </div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
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