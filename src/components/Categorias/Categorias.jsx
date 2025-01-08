import React, {useState} from "react";
import './Categorias.css';

const Categorias = () => {

    const [activeLink, setActiveLink] = useState("NOVIDADES E TENDÊNCIAS");

    const handleClick = (event, link) => {
        event.preventDefault();
        setActiveLink(link)
    }

    return(
        <>

            <ul>
                <li><a href="#" className={activeLink === "NOVIDADES E TENDÊNCIAS" ? "active" : ""} onClick={(event) =>handleClick(event,"NOVIDADES E TENDÊNCIAS")}>NOVIDADES E TENDÊNCIAS</a></li>
                <li><a href="#" className={activeLink === "CATEGORIAS" ? "active" : ""} onClick={(event) => handleClick(event,"CATEGORIAS")}>CATEGORIAS</a></li>
                <li><a href="#" className={activeLink === "LOJA DE PONTOS" ? "active" : ""} onClick={(event) => handleClick(event, "LOJA DE PONTOS")}>LOJA DE PONTOS</a></li>
                <li><a href="#" className={activeLink === "NOTÍCIAS" ? "active" : ""} onClick={(event) => handleClick(event, "NOTÍCIAS")}>NOTÍCIAS</a></li>
                <li><a href="#" className ={activeLink === "LABORATÓRIO" ? "active" : ""} onClick={(event) => handleClick(event, "LABORATÓRIO")}>LABORATÓRIO</a></li>
            </ul>

        </>
    )
}

export default Categorias;