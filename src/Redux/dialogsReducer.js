const ADD_MESSAGE = 'ADD-MESSAGE';

let initialsState = {
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
};

const dialogsReducer = (state = initialsState, action) => {
    let newMessage = {
        id: 5, message: action.newMessageText
    }
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return (state);
    }
}
export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});


export default dialogsReducer;


