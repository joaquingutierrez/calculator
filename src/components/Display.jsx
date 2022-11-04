import React from "react";
import "./styles/Display.css"

const Display = ({ display, result }) => {


    return (
        <div className="displayContainer">
            <h2 className="display">Operation: {display}</h2>
            <h2 className="display">result: {result}</h2>
        </div>
    )
}

export default Display