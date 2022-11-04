import React, { useState } from "react";
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import './styles/CalculatorContainer.css'

const CalculatorContainer = () => {

    const [display, setDisplay] = useState([])
    const [displayResult, setDisplayResult] = useState("")

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
        //if the first number of the array is a negative => ["","-","number"]
        if (result[0] === "" && result[1] === "-") {
            result[0] = - parseFloat(result[2])
            result.splice(1, 2)
        }
        //operation with a negative number => ["numberA","*","","-","numberB"] || ["numberA","-","","*","numberB"]
        if (result.some((element) => element === "")) {
            const i = result.findIndex((element) => element === "")
            if ((result[i + 1] === "-" && result[i - 1] !== "-") || (result[i - 1] === "-" && result[i + 1] !== "-")) {
                result[i + 2] = - parseFloat(result[i + 2])
                result[i + 1] === "-" ? result.splice(i, 2) : result.splice(i - 1, 2)
            } else if (result[i + 1] === "-" && result[i - 1] === "-") {
                result[i + 2] = - parseFloat(result[i + 2])
                result.splice(i - 1, 2)
            } else {
                return setDisplayResult("Syntax Error")
            }
        }
        operation("*", result)
        operation("/", result)
        operation("+", result)
        operation("-", result)
        setDisplayResult(result)

    }

    const handleAC = () => {
        setDisplay([])
        setDisplayResult("")
    }

    return (
        <div className="calculatorContainer">
            <Display display={display} result={displayResult} />
            <ButtonPanel handleClick={handleClick} handleResult={handleResult} handleAC={handleAC} />
        </div>
    )
}

export default CalculatorContainer