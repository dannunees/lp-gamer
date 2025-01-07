import React from "react";
import './Header.css'
import Navbar from "../Navbar/Navbar";


const Header = () => {
    return (
        <>
            <header>
                <div className="headerItens">
                    <img src="src/assets/images/logo.png" alt="" />
                    <Navbar />
                </div>
                <div className="headerBtns">
                    <img src="src/assets/images/noticiations.png" alt="" />
                    <img src="src/assets/images/message-circle.png" alt="" />
                    <img src="src/assets/images/user-info.png" alt="" />
                </div>
            </header>
        </>
    )
};

export default Header;