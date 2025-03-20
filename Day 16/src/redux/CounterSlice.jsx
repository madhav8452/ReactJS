// Action Creator

export const increment = () => ({type : 'Increment'})
export const decrement = () => ({type : 'Decrement'})

// Reducer

const InitialState = {count : 0}

const counterReducer = (state = InitialState, action) => {
    if(action.type == 'Increment'){
        return {...state, count : state.count + 1}
    }
    else if(action.type == 'Decrement'){
        return {...state, count : state.count - 1}
    }
    else{
        return state
    }
}

export default counterReducer