const ADD_MESSAGE = 'ADD-MESSAGE';

type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}

let initialsState = {
    messages: [
        {id: 1, message: 'I love props!?'},
        {id: 2, message: 'I love props!?'},
        {id: 3, message: 'I love props!?'},
        {id: 4, message: 'I love props!?'}
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: 'Гагарин'},
        {id: 2, name: 'Титов'},
        {id: 3, name: 'Терешкова'},
        {id: 4, name: 'Леонов'},
        {id: 5, name: 'Гречко'}
    ] as Array<DialogsType>
};

type DialogsInitialsStateType = typeof initialsState

const dialogsReducer = (state: DialogsInitialsStateType = initialsState, action: any): DialogsInitialsStateType => {
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
type addMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}
export const addMessageActionCreator = (newMessageText: string): addMessageActionType => ({
    type: ADD_MESSAGE,
    newMessageText
});


export default dialogsReducer;


