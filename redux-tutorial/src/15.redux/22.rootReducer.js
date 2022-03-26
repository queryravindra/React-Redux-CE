// import { combineReducers } from "redux";

// import cakeReducer from "./15.cake/16.0.cakeReducer";
// import iceCreamReducer from "./22.iceCream/22.2.iceCreamReducer";

// const rootReducer = combineReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer
// })

// export default rootReducer



// 28.Async Actions
import { combineReducers } from "redux";

import cakeReducer from "./15.cake/16.0.cakeReducer";
import iceCreamReducer from "./22.iceCream/22.2.iceCreamReducer";
import useReducer from './28.user/28.2.userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: useReducer
})

export default rootReducer