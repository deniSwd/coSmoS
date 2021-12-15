import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/news' element={<News/>}/>
                        {/* <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>*/}
                        </Routes>
                    </div>
                </div>
        </BrowserRouter>
    );
}


export default App;
