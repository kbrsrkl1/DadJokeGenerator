const btnEl = document.getElementById("btn")
const apiKey = "fEt0m5a1v5/N3Rm8zEwM1A==ramP350OHh9Iz2pV"

const jokeEl =  document.getElementById("joke")


const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit="

async function getJoke(){
    const response = await fetch(apiURL, options);
    const data = await response.json();

    jokeEl.innerText = data[0].joke
}


btnEl.addEventListener("click", getJoke)