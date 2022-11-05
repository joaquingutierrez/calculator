import React from "react";
import "./styles/Display.css"

const Display = ({ display, result }) => {


    return (
        <div className="displayContainer">
            <h2 className="display">{display}</h2>
            <h2 className="display">{result}</h2>
        </div>
    )
}

export default Display