import { createStore, combineReducers } from 'redux'
// import countReducer from '../reducers/countReducer'
import numberReducer from '../reducers/numberReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        // count: countReducer,
        numbers : numberReducer
    }))
    return store
}

export default configureStore