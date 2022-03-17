const numberInitialState = []

const numberReducer = (state=numberInitialState, action) => {
    switch(action.type) {
        case 'GENERATE': {
            console.log('inside generate ', action.payload)
            return [...state, {...action.payload}]
        }
        case 'INCREMENT': {
            return state.map((num) => {
                if (num.id == action.payload.id) {
                    return { ...num, number: num.number + 1 }
                } else {
                    return num
                }
            })
        }
        case 'DECREMENT': {
            console.log("Inside decrement  1 ", action.payload)
            console.log("Inside decrement 2 ", state)

            return state.map((num) => {
                if (num.id == action.payload.id) {
                    return {...num, number: num.number - 1}
                } else {
                    return num
                }
            })
        }
        case 'REMOVE': {
            const result = state.filter( (num,i) => num.id !=  action.payload.id )
            return result
        }
        case 'REMOVE_ALL': {
            return numberInitialState
        }
        case 'ADD_NUMBER': {
            return [...state, {...action.payload}]
        }
        case 'INCREMENT_BY': {
            return state.map(num => { return {...num, number: num.number + 2} })
        }
        default: return [...state] // [].concat(state)  - ES5 
    }
}

export default numberReducer