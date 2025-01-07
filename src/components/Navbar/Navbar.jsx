import React from "react";
import "./Navbar.css"


const Navbar = () => {
    return(
        <>
            <nav>
                <ul>
                    <li><a href="#" class="active">LOJA</a></li>
                    <li><a href="#">BIBLIOTECA</a></li>
                    <li><a href="#">COMUNIDADE</a></li>
                    <li><a href="#">AJUDA</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar