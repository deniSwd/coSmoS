const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialsState = {
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
};

const dialogsReducer = (state = initialsState, action) => {
    let newMessage = {
        id: 5, message: state.newMessageText
    }
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.mess
            }
        default:
            return (state);
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (mess) => ({type: UPDATE_NEW_MESSAGE_TEXT, mess: mess});

export default dialogsReducer;


