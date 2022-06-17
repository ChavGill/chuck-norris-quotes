//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('button').value
  const url = `https://api.chucknorris.io/jokes/random/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.value
       // document.querySelector('img').src = data.icon_url

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}