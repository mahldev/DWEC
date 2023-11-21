const $ = (selector) => document.querySelector(selector)

const $info = $('#info')

document.querySelectorAll('.element').forEach(e => {
    e.addEventListener('click', (event) => {
        showAllInfo(event.target)
    })
})


function getFather(nodo) {
  return nodo.parentElement ? nodo.parentElement : null
}

function getAllSiblings(nodo) {
  return nodo.parentNode ? nodo.parentNode.children : null
}

function showAllInfo(nodo) {
  const parentNode = getFather(nodo)

  $info.innerHTML = parentNode.innerHTML
}
