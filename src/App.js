import React from 'react';
import './App.css';
import logoimg from './assets/my images/logo.png'
import contentimg from './assets/my images/content.jpg'
import userimg from './assets/my images/user.jpg'
import Header from './Components/Header'
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
