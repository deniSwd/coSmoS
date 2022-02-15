import logoimg from "../../assets/my images/logo.png";
import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={style.header}>
            <div>
                <img className={style.img} src={logoimg}/>
            </div>
            <div className={style.h1}>
                coSmoS
            </div>
            <div className={style.loginBlock}>
                { props.isAuth ? <div>{props.login}  <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>

        </header>
    )

}
export default Header;