const API_URL = "https://icanhazdadjoke.com/"

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const init = {
    headers : {
      Accept : 'application/json',
      'User-Agent' : 'mateus - beTrybe.com Student: mateustalles.github.io'
    }
  }
  const jokeContainer = document.querySelector("#jokeContainer")
  fetch (API_URL, init)
    .then(response => response.json().then(response => jokeContainer.innerHTML = response.joke))
}

window.onload = () => fetchJoke()