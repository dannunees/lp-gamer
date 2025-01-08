import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

    const [activeLink, setActiveLink] = useState("LOJA");


    const handleClick = (link) => {
        setActiveLink(link); 
    };

    return (
        <nav>
            <ul>
                <li>
                    <a
                        href="#"
                        className={activeLink === "LOJA" ? "active" : ""}  
                        onClick={() => handleClick("LOJA")} 
                    >
                        LOJA
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeLink === "BIBLIOTECA" ? "active" : ""}  
                        onClick={() => handleClick("BIBLIOTECA")}  
                    >
                        BIBLIOTECA
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeLink === "COMUNIDADE" ? "active" : ""}  
                        onClick={() => handleClick("COMUNIDADE")}  
                    >
                        COMUNIDADE
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeLink === "AJUDA" ? "active" : ""}  
                        onClick={() => handleClick("AJUDA")} 
                    >
                        AJUDA
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
