let store = {
    _state: {
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
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Гагарин'},
                {id: 2, name: 'Титов'},
                {id: 3, name: 'Терешкова'},
                {id: 4, name: 'Леонов'},
                {id: 5, name: 'Гречко'}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {

    },
    addMessage(message) {
        let newMessage = {
            id: 5, message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(mess) {
        this._state.messagesPage.newMessageText = mess
        this._callSubscriber(this._state);

    },
    addPost(postMessage) {
        let newPost = {
            id: 3, message: this._state.profilePage.newPostText, likeAmount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state);

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}
export default store;