const redux = require('redux');
const createStore = redux.createStore;
const combineReducers  = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}


const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

const store = createStore(rootReducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();


// When you dispatch an action both the reducers receive that action,the difference is that one of them acts on that action
// the other just ignores it


// Initial State { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
// Updated state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
// Updated state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
// Updated state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
// Updated state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
// Updated state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 18 } }