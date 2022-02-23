import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
/*import DialogsContainer from "./Components/Dialogs/DialogsContainer";*/
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import {Route} from "react-router-dom"
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/login";
import {connect} from "react-redux";
import {initializedApp} from "./Redux/appReducer";
import Preloader from "./Components/Common/Preloader/Preloader";
const DialogsContainer = React.lazy(()=>import("./Components/Dialogs/DialogsContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() =>
                        <Suspense fallback={<div>...LOADING...</div>}>
                            <DialogsContainer/>
                        </Suspense>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialize: state.app.initialize
    }
}

export default connect(mapStateToProps, {initializedApp})(App);
