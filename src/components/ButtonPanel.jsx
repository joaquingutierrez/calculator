import React from "react";
import Button from "./Button";
import './styles/ButtonPanel.css'

const ButtonPanel = ({ handleClick, handleResult, handleAC, handleDEL, handleAns }) => {

    return (
        <div className="buttonPanel">
            <Button button={"7"} handleClick={handleClick} />
            <Button button={"8"} handleClick={handleClick} />
            <Button button={"9"} handleClick={handleClick} />
            <Button button={"DEL"} handleClick={handleDEL} />
            <Button button={"AC"} handleClick={handleAC} />
            <Button button={"4"} handleClick={handleClick} />
            <Button button={"5"} handleClick={handleClick} />
            <Button button={"6"} handleClick={handleClick} />
            <Button button={" * "} handleClick={handleClick} />
            <Button button={" / "} handleClick={handleClick} />
            <Button button={"1"} handleClick={handleClick} />
            <Button button={"2"} handleClick={handleClick} />
            <Button button={"3"} handleClick={handleClick} />
            <Button button={" + "} handleClick={handleClick} />
            <Button button={" - "} handleClick={handleClick} />
            <Button button={"0"} handleClick={handleClick} />
            <Button button={"."} handleClick={handleClick} />
            <Button button={"Ans"} handleClick={handleAns} />
            <Button button={"="} handleClick={handleResult} />
        </div>
    )
}

export default ButtonPanel