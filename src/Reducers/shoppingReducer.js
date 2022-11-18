import { TYPES } from "../Actions/shoppingActions";


// export const shoppingInitialState = {
//     products: [
//         {id: 1, name: 'Nombre 1', price: 200},
//         {id: 2, name: 'Nombre 2', price: 200},
//         {id: 3, name: 'Nombre 3', price: 200},
//         {id: 4, name: 'Nombre 4', price: 200},
//         {id: 5, name: 'Nombre 5', price: 200},
//         {id: 6, name: 'Nombre 6', price: 200},
//     ],
//     cart: []
// }

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{

        }
            break;
        case TYPES.REMOVE_ONE_FROM_CART: {
            
        }
            break;
        case TYPES.REMOVE_ALL_FROM_CART: {

        }
            break;
        case TYPES.CLEAR_CART: {

        }
            break;
    
        default:
            return state
    }
}