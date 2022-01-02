let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'What is you name?', likeAmount: '10'},
            {id: 2, message: 'How are you?', likeAmount: '15'}
        ],
        newPostText: ''
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'I love props!?'},
            {id: 2, message: 'I love props!?'},
            {id: 3, message: 'I love props!?'},
            {id: 4, message: 'I love props!?'}
        ],
        dialogs: [
            {id: 1, name: 'Гагарин'},
            {id: 2, name: 'Титов'},
            {id: 3, name: 'Терешкова'},
            {id: 4, name: 'Леонов'},
            {id: 5, name: 'Гречко'}
        ]
    }
}
export const addPost = (postMessage) => {
    let newPost = {
        id: 3, message: state.profilePage.newPostText, likeAmount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);

}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText= newText
    rerenderEntireTree(state);

}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;