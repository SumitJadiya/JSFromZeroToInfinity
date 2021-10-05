'use strict';

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

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
const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
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
}

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


const request = fetch(`https://restcountries.com/v2/name/india`)
console.log(request) // returns promise