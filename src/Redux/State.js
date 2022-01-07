import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
    _callSubscriber() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;