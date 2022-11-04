import React from "react";
import "./styles/Button.css"

const Button = ({button, handleClick}) => {


    return (
        <>
            <h4 className="button" onClick={()=>handleClick(button)}>{button}</h4>
        </>
    )
}

export default Button