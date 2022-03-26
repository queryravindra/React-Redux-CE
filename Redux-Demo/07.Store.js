// import redux from 'redux'  --> client
const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// (previousState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state;
    }
}

const store = createStore(reducer);
console.log('Initial State', store.getState());
// subscribe() method accepts a function
// but as far as now consider kepp it simple by just logging updated state
// store.subscribe(() => console.log('Updated state', store.getState()));
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
// To cause few more transitions I will dispatch the action two more times
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();



// Initial State { numOfCakes: 10 }
// Updated state { numOfCakes: 9 }
// Updated state { numOfCakes: 8 }
// Updated state { numOfCakes: 7 }