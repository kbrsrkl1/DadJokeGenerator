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
    
    try {
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
    
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a job"
    
        jokeEl.innerText = data[0].joke
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later;"
        console.log(error)
    }
}


btnEl.addEventListener("click", getJoke)