import { TYPES } from "../Actions/shoppingActions";
import { Products } from "../utils/Products";


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
            let newItem = Products.New.find(product => product.Id === action.payload);

            let itemInCart = Products.Cart.find(item => item.Id === newItem.Id);

            return itemInCart ? Products.Cart.map((item => item.Id === newItem.Id ? {...item,  Quantity: item.quantity + 1} : item)) : Products.Cart.push(newItem);


        }
        break;
        case TYPES.REMOVE_ONE_FROM_CART: {
            
            Products.Cart = Products.Cart.filter(item => item.Id !== action.payload)
            
            return Products.Cart
            
            // let itemToDelete = Products.Cart.find((item) => item.Id === action.payload);
            
            // return itemToDelete.quantity > 1 ? {
            //     ...Products, 
            //     Cart: state.cart.map((item) =>item.Id === action.payload ? {...item, quantity: item.quantity - 1}: item),
            // } : {
            //     ...Products,
            //     Cart: Products.Cart.filter(item => item.Id !== action.payload)
            // }
        }
            break;
        case TYPES.REMOVE_ALL_FROM_CART: {
            Products.Cart = Products.Cart.filter(item => item.Id !== action.payload)
            return Products.Cart
        }
            break;
        case TYPES.CLEAR_CART: {
            let productsCart =  Products.Cart; 
            Products.Cart.splice(0, productsCart.length);
        }
            break;
    
        default:
            return state
    }
}