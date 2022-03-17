
export const generateNumber = (n) => {
    return {
        type: 'GENERATE',
        payload: n
    }
}

export const increment = (n) => {
    return {
        type: 'INCREMENT',
        payload: n
    }
}

export const decrement = (n) => {
    return {
        type: 'DECREMENT',
        payload: n
    }
}

export const remove = (n) => {
    return {
        type: 'REMOVE',
        payload: n
    }
}

export const removeAll = () => {
    return {
        type: 'REMOVE_ALL'
    }
}

export const addNumber = (n) => {
    return {
        type: 'ADD_NUMBER',
        payload: n
    }
}

export const incrementBy = (n) => {
    return {
        type: 'INCREMENT_BY',
        payload: n
    }
}
