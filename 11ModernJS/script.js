// Importing module
import { addToCart, totalPrice, totalQty } from './shoppingCart.js'

// or import * from './shoppingCart.js'

console.log("Importing module")

// without export
// console.log(shippingCost)  // Uncaught ReferenceError: shippingCost is not defined

addToCart('bread', 5)

console.log(totalPrice, totalQty)