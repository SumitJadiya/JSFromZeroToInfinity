var num1 = 7
var num2 = 8
console.log(num1 * num2)

var answer = num1 > num2
console.log(answer)

var listingPrice = 799;
var sellingPrice = 199;
var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log(discountPercentage)

var displayDiscountPercentage = Math.round(discountPercentage)
console.log(displayDiscountPercentage)

console.log(typeof displayDiscountPercentage)