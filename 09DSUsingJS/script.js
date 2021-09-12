const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        [weekdays[4]]: {
            open: 11,
            close: 23,
        },
        [weekdays[5]]: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

}

const arr = [2, 3, 4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

////////////////////////////
// destructuring arrays
////////////////////////////
const [x, y, z] = arr
console.log(x, y, z) // 2 3 4
console.log(arr) // [ 2, 3, 4 ]

const [first, second] = restaurant.categories
console.log(first, second) // Italian Pizzeria

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

// swapping values
[main, secondary] = [secondary, main]
console.log(main, secondary) // Vegetarian Italians

const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse) // [ 'Garlic Bread', 'Pizza' ]

const nested = [2, 4, [5, 6]]
const [i, , [j, k]] = nested
console.log(i, j, k) // 2 5 6

////////////////////////////
// destructuring objects
////////////////////////////
const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories)

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // won't work without parenthesis
console.log(a, b); // 23 7

// Nested objects
const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
}); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
}); // Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00