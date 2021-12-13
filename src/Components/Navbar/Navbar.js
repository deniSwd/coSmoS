import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className= {style.nav}>
            <div className= {style.item}>
                <a href='#s'>Profile</a>
            </div>
            <div className= {style.item}>
                <a>Masseges</a>
            </div>
            <div className= {style.item}>
                <a>News</a>
            </div>
            <div className= {style.item}>
                <a>Music</a>
            </div>
            <div className= {style.item}>
                <a>Settins</a>
            </div>
        </nav>
    )
}
export default Navbar;