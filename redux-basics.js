const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter : 0
}
// Reducers

const createReducer = (prevState = initialState, action)=> {
    if (action.type == 'INC_COUNTER'){
        return {
            ...prevState,
            counter: prevState.counter + 1
        }
    }
    else if (action.type == 'ADD_COUNTER'){
        return {
            ...prevState,
            counter: prevState.counter + action.value
        }
    }
    return prevState
};

// Store 
const store = createStore(createReducer);
console.log(store.getState())

// Subcription
store.subscribe(()=>{
    console.log('[Subscription]', store.getState())
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState())

