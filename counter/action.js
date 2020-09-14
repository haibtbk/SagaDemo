
export const increment = (value)=>{
    return {
        type: "INCREASE_COUNTER",
        value
    }
}

export const decrement = (value)=>{
    return {
        type: "DECREASE_COUNTER",
        value
    }
}