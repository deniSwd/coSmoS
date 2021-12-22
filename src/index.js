import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
    {id: 1, message: 'What is you name?', likeAmount: '10'},
    {id: 2, message: 'How are you?', likeAmount: '15'}
]
let dialogs = [
    {id: 1, name: 'Гагарин'},
    {id: 2, name: 'Титов'},
    {id: 3, name: 'Терешкова'},
    {id: 4, name: 'Леонов'},
    {id: 5, name: 'Гречко'}
]
let messages = [
    {id: 1, message: 'I love props!?'},
    {id: 2, message: 'I love props!?'},
    {id: 3, message: 'I love props!?'},
    {id: 4, message: 'I love props!?'}
]

ReactDOM.render(
    <React.StrictMode>
        <App postsFromIndex={posts} dialogsFromIndex={dialogs} messageFromIndex={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

