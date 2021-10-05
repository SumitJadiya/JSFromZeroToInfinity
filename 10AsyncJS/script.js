'use strict';

const img = document.querySelector('.loader')
const btn = document.querySelector('.btn-country')
const main = document.querySelector('.container')
const countriesContainer = document.querySelector('.countries')

const renderError = function (msg) {
    countriesContainer.insertAdjacentHTML('beforeend', msg)
    countriesContainer.style.opacity = 1
}

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data?.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data?.nativeName} (${data?.name})</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Millions People</p>
            <p class="country__row"><span>🗣️</span>${data?.languages[0]?.name}</p>
            <p class="country__row"><span>💰</span>${data?.currencies[0]?.name}</p>
          </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1
}

function loadLoader() {
    img.src = 'Spinner-1s-200px.gif'
}

loadLoader()
setTimeout(() => {
    img.style.display = 'none'
    main.style.opacity = 1
}, 5000)


// old school way
/*
function getCountryDataOldWay(country) {
    const request = new XMLHttpRequest()
    request.open('GET', `https://restcountries.com/v2/name/${country}`)
    request.send()

    console.log(request.responseText)

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)
        console.log(data)

        const html = `
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.nativeName}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Millions People</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;

        countriesContainer.insertAdjacentHTML('beforeend', html)
        countriesContainer.style.opacity = 1
    })
}

getCountryDataOldWay('portugal')
getCountryDataOldWay('bharat')
getCountryDataOldWay('usa')
*/

/*
// CALLBACK HELL
*/
/*
function getCountryAndNeighbours(country) {
    const request = new XMLHttpRequest()
    request.open('GET', `https://restcountries.com/v2/name/${country}`)
    request.send()

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)
        renderCountry(data)

        // neighbour countries
        const [neighbour] = data.borders

        if (!neighbour) return;

        const request2 = new XMLHttpRequest()
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
        request2.send()

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText)
            console.log(data2)
            renderCountry(data2, "neighbour")
        })
    })
}

getCountryAndNeighbours('portugal')
getCountryAndNeighbours('bharat')
*/

// Promises

// const request = fetch(`https://restcountries.com/v2/name/india`)
// console.log(request) // returns promise

const getJson = function (url, errorMsg = 'Something went wrong!') {
    return fetch(url)
        .then(response => {
            if (!response.ok)
                throw new Error(`${errorMsg} (${response.status})`)

            return response.json()
        })
}

const getCountryData = function (country) {
    getJson(`https://restcountries.com/v2/name/${country}`, 'country not found')
        .then(response => {
            console.log(response)
            renderCountry(response[0])
            const neighbour = response[0].borders[0]

            if (!neighbour) throw new Error("No Neighbour Found!");

            return getJson(`https://restcountries.com/v2/alpha/${neighbour}`, 'country not found')
        })
        .then(response => {
            console.log(response)
            return renderCountry(response, 'neighbour')
        })
        .catch(err => {
            console.error(`${err} while handling promise`)
            renderError(`Something went wrong! 💥 ${err.message}. Please try again!`);
        }) // catches if promise failed
        .finally(() => {
            countriesContainer.style.opacity = 1
        })
}

/*

bad code

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => {

            if (!response.ok)
                throw new Error(`Country not found (${response.status})`)

            return response.json()
        })
        .then(response => {
            renderCountry(response[0])
            const neighbour = response[0].borders[1]

            if (!neighbour) return;

            return fetch(`https://restcountries.com/v2/alphaa/${neighbour}`)
        })
        .then(response => {
            if (!response.ok)
                throw new Error(`Neighbour Country not found (${response.status})`)

            return response.json()
        })
        .then(response => renderCountry(response, 'neighbour'))
        .catch(err => {
            console.error(`${err} while handling promise`)
            renderError(`Something went wrong! 💥 ${err.message}. Please try again!`);
        }) // catches if promise failed
        .finally(() => {
            countriesContainer.style.opacity = 1
        })
}
*/

btn.addEventListener('click', function () {
    getCountryData('bharat')
    getCountryData('usa')
})
