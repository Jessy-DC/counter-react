import React, {useState} from 'react'
import '../Style/IncrementDecrement.css'

export const IncrementDecrement = ({counter, changeCounter}) => {
    const [inputInc, setInputInc] = useState(1)
    const [inputDesc, setInputDesc] = useState(1)

    const handleClickInc = () => {
        let newCounterValue = counter + Number(inputInc)
        changeCounter(newCounterValue)
        console.log(newCounterValue)
    }

    const handleClickDesc = () => {
        let newCounterValue = counter - inputDesc
        changeCounter(newCounterValue)
        console.log(counter)
    }

    const handleChangeInc = event => {
        setInputInc(event.currentTarget.value)
    }

    const handleChangeDesc = event => {
        setInputDesc(event.currentTarget.value)
    }

    return (
        <div className="update-counter-element">
            <div>
                <button className="button-inc-dec" onClick={handleClickInc}>+</button>
                <input className="value-inc-dec" type="number" onChange={handleChangeInc} value={inputInc} />
            </div>
            <div>
                <button className="button-inc-dec" onClick={handleClickDesc}>-</button>
                <input className="value-inc-dec" type="number" onChange={handleChangeDesc} value={inputDesc} />
            </div>
        </div>
    )
}