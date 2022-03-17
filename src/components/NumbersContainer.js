import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import NumbersList from './NumbersList'
import NumbersControl from './NumbersControl'
import AddNumber from './AddNumber'


function NumbersContainer(props) {
    const [ element, setElement ] = useState('')
   
    const numbers = useSelector((state) => {
        return [...state.numbers]
    })
    const values = numbers.map(num => num.number)

    return (
        <div>
            <h2>Listing - {numbers.length}  Sum - { values.reduce((a,b) => a+b, 0) }</h2><br/>
            <input type='text' placeholder='search' value={element} name='search' onChange={(e) => setElement(e.target.value)} /> 
            <br/>
            
            { numbers.length ? <NumbersList searchItem={element} /> :  null }
            
            <NumbersControl/>
            <AddNumber/>
        </div>
    )
}
export default NumbersContainer