import './output.css'

import { Community } from './components/Community.js'

async function getData (url) {
  return fetch(url).then(res => res.json())
}

const communities = await getData('./public/arbol.json')

document.querySelector('#app').innerHTML = (/* html */`
  <h1 class="font-light">Comunidades</h1>
  ${communities.map(community => Community(community)).join('')}
`)
