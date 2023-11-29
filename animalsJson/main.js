import './style.css'

function fetchData (url) {
  return fetch(url).then(res => res.json())
}

const animals = await fetchData('animals.json')
const sixFrisAnimals = Object.entries(animals.animals).filter((_, index) => index < 6)

document.querySelector('#app').innerHTML = /* html */`
<h1>Animals</h1>
<div class="animals">
${sixFrisAnimals.map(animal => /* html */`
  <div class="animal">
      <h1>${animal[0]}</h1>
      <h3>${animal[1].species}</h3>
      <p>Liked food</p>
      <ul>
        ${animal[1].foods.likes.map(food => /* html */`
          <li>${food}</li>
        `).join('')}
      </ul>
      <p>Disliked food</p>
      <ul>
        ${animal[1].foods.dislikes.map(food => /* html */`
          <li>${food}</li>
        `).join('')}
      </ul>
    </div>
  `).join('')}
</div>
`
