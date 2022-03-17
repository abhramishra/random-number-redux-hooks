import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, remove } from '../actions/numbersAction'

function NumbersList(props) {
    
    const { searchItem, orderBy } = props
    const numbers = useSelector((state) => {
        return state.numbers
    })

    const dispatch = useDispatch()

    return (
        <div>
            {
                numbers
                .filter(ele => {
                    if (searchItem == '') {
                        console.log("Inside filterrrr ", ele)
                        return ele
                    } else if (ele.number.toString().includes(searchItem)) {
                        console.log("Inside includes ", typeof(ele))
                        return ele
                    }
                }).
                map((num,i) => {
                    return (
                        <p key={i}> {num.number} 
                            <button onClick={() => {
                                dispatch(decrement(num))
                            }}> - </button> 
                            <button onClick={() => {
                                dispatch(increment(num))
                            }}> + </button>
                            <button onClick={() => {
                                dispatch(remove(num))
                            }}> Remove </button>
                        </p>
                    )
                })
                
            }
        </div>
    )
}
export default NumbersList