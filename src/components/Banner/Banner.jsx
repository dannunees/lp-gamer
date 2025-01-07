import React from "react";
import './Banner.css'

const Banner = (props) => {
    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                <div className="bannerContent">
                    <img src={props.icone} alt="" />
                    <p>{props.text}</p>
                    <a href="#">{props.botao}</a>
                </div>
            </div>
        </>
    )
}

export default Banner