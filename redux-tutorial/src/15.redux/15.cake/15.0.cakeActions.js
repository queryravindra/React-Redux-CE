// import { BUY_CAKE } from "./15.1.cakeTypes"

// export const buyCake = () => {
//     return {
//         type: BUY_CAKE
//     }
// }

// 25.Action payload
import { BUY_CAKE } from "./15.1.cakeTypes"

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}