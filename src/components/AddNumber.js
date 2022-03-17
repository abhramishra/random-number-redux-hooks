import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addNumber } from '../actions/numbersAction'
import { v4 as uuidv4 } from 'uuid'

function AddNumber(props) {
    const dispatch = useDispatch()
    const [ number, setNumber ] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const num = {
            id: uuidv4(),
            number: Number(number)
        }
        console.log(num)
        dispatch(addNumber(num))
        setNumber('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br/>
                <input type='text' placeholder='Add new number' value={number} onChange={(e) => {
                    setNumber(e.target.value)
                }} />
            </form>
        </div>
    )
}

export default AddNumber