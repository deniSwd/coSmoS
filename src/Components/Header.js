import logoimg from "../assets/my images/logo.png";
import React from "react";
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <img className={style.img} src={logoimg}/>
            </div>
            <div className={style.h1}>
                coSmoS
            </div>

        </header>
    )

}
export default Header;