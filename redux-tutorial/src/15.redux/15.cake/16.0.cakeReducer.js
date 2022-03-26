// import { BUY_CAKE  } from "./15.1.cakeTypes"

// const initialState = {
//     numOfCakes: 10
// }

// const cakeReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         default: return state
//     }
// }

// export default cakeReducer


// 25.Action Payload

import { BUY_CAKE  } from "./15.1.cakeTypes"

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }

        default: return state
    }
}

export default cakeReducer