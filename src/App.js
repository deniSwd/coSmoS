import React from 'react';
import './App.css';
import logoimg from './assets/my images/logo.png'
import contentimg from './assets/my images/content.jpg'
import userimg from './assets/my images/user.jpg'

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src={logoimg}/>
            </header>
            <nav className='nav'>
                <div>
                    <a href='#s'>Profile</a>
                </div>
                <div>
                    <a>Masseges</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settins</a>
                </div>
            </nav>
            <div className='content'>
                <div className='content-img'>
                    <img src={contentimg}/>
                </div>
                <div>
                    <img src={userimg}/>
                </div>
                <div>
                    My Posts
                </div>
                <div>
                    New Posts
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>

            </div>
        </div>
    );
}


export default App;
