import React, { useState } from "react";
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import './styles/CalculatorContainer.css'

const CalculatorContainer = () => {

    const [display, setDisplay] = useState([])
    const [result, setResult] = useState("")

    const handleClick = (button) => {
        setDisplay([...display, button])
    }

    const operation = (operator, result) => {
        while (result.some((element) => element === operator)) {
            const i = result.findIndex((element) => element === operator)
            switch (operator) {
                case "+":
                    result[i] = parseFloat(result[i - 1]) + parseFloat(result[i + 1])
                    break
                case "-":
                    result[i] = parseFloat(result[i - 1]) - parseFloat(result[i + 1])
                    break
                case "*":
                    result[i] = parseFloat(result[i - 1]) * parseFloat(result[i + 1])
                    break
                case "/":
                    result[i] = parseFloat(result[i - 1]) / parseFloat(result[i + 1])
                    break
                default:
                    console.log("Error");
            }
            result.splice(i + 1, 1)
            result.splice(i - 1, 1)
        }
    }

    const handleResult = () => {
        let result = display.join("")
        result = result.split(" ")
        operation("*", result)
        operation("/", result)
        operation("+", result)
        operation("-", result)
        setResult(result)

    }

    const handleAC = () => {
        setDisplay([])
        setResult("")
    }

    return (
        <div className="calculatorContainer">
            <Display display={display} result={result} />
            <ButtonPanel handleClick={handleClick} handleResult={handleResult} handleAC={handleAC} />
        </div>
    )
}

export default CalculatorContainer