import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import {Route} from "react-router-dom"




const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
                        <Route path='/dialogs' render={ () => <DialogsContainer />}/>
                        <Route path='/users' render={ () => <UsersContainer />}/>
                        <Route path='/music' render={ () => <Music/>}/>
                        <Route path='/settings' render={ () => <Settings/>}/>
                </div>
            </div>

    );
}


export default App;
