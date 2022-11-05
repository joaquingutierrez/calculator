import React from "react";
import Button from "./Button";
import './styles/ButtonPanel.css'

const ButtonPanel = ({ handleClick, handleResult, handleAC, handleDEL }) => {

    const buttons = [7, 8, 9, " / ", 4, 5, 6, " * ", 1, 2, 3, " + ", 0, ".", " - "]

    return (
        <div className="buttonPanel">
            {
                buttons.map((button, index) => {
                    return <Button key={index} button={button} handleClick={handleClick} />
                })
            }
            <Button button={"DEL"} handleClick={handleDEL} />
            <Button button={"="} handleClick={handleResult} />
            <Button button={"AC"} handleClick={handleAC} />
        </div>
    )
}

export default ButtonPanel