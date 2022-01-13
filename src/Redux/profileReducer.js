const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialsState = {
    posts: [
        {id: 1, message: 'What is you name?', likeAmount: '10'},
        {id: 2, message: 'How are you?', likeAmount: '15'}
    ],
    newPostText: ''
};


const profileReducer = (state=initialsState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3, message: state.newPostText, likeAmount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...stateCopy.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        default: {
            return (state);
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;
