let url = "https://api.chucknorris.io/jokes/random"

fetch(url)
    // .then(response => console.log(response.json()) )
    .then(response => response.json()) // this still returns promise
    .then(data => {
        console.log(data)
        let joke = data.value
        console.log("Joke - ", joke)
    })
    .catch()