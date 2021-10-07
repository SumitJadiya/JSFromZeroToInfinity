// exporting module

console.log("exporting module")

const shippingCost = 10
const cart = []

export const addToCart = (product, qty) => {
    cart.push({ product, qty })
    console.log(`${qty} ${product} added to cart `)
}

const totalPrice = 237;
const totalQty = 23;

export { totalPrice, totalQty }