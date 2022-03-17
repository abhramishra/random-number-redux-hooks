import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateNumber, removeAll, incrementBy } from '../actions/numbersAction'
import { v4 as uuidv4 } from 'uuid'

function NumbersControl(props) {
    const dispatch = useDispatch()
    const handleGenerate = () => {
        // const number = Math.ceil(Math.random() * 100)
        const num = {
            id: uuidv4(),
            number: Math.ceil(Math.random() * 100)
        }
        dispatch(generateNumber(num))
    }
    return (
        <div>
            <button onClick={handleGenerate}>Generate</button>
            <button onClick={() => {
                dispatch(incrementBy(2))
            }}> +2 </button>
            <button onClick={() => {
                dispatch(removeAll())
            }}> Remove All </button>
        </div>
    )
}
export default NumbersControl