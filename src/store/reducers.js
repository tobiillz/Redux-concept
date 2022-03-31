const initialState = {
    initialCounter: 0,
    results: []
};

const reducer = (state = initialState, action)=> {

    switch (action.type){
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.initialCounter = state.initialCounter + 1;
            return {
                ...state,
                initialCounter: state.initialCounter + 1
            };
            break;
        case 'DECREMENT':   
            return {
                ...state,
                initialCounter: state.initialCounter - 1
            };
            break;
        case 'ADD':   
            return {
                ...state,
                initialCounter: state.initialCounter + action.payload
            };
            break;
        case 'SUB':   
            return {
                ...state,
                initialCounter: state.initialCounter - action.payload
            };
            break;
        case 'STORE_RESULT':   
            return {
                ...state,
                results: state.results.concat(state.initialCounter)
            };
            break;
    }
    
    // if (action.type === 'INCREMENT'){
    //     return {
    //         initialCounter: state.initialCounter + 1
    //     }
    // }
    // else if (action.type === "DECREMENT"){
    //     return {
    //         initialCounter: state.initialCounter - 1
    //     }
    // }
    // else if (action.type === "ADD"){
    //     return {
    //         initialCounter: state.initialCounter + action.payload
    //     }
    // }
    // else if (action.type === "SUB"){
    //     return {
    //         initialCounter: state.initialCounter - action.payload
    //     }
    // }

    return state;
}

export default reducer;