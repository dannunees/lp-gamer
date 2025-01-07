import React from "react";
import './Input.css';

const Input = (props) => {
    return <input style={props.style} type="text" placeholder={props.placeholder}/>
}

export default Input