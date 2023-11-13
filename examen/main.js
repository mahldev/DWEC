const $ = (selector) => document.querySelector(selector)

async function fetchData (url) {
  return fetch(url).then((response) => response.json())
}

const createOption = (name) => {
  return `<option value="${name}">${name}</option>`
}

function initHTMLSelect (regionsNames) {
  $('#select').innerHTML = regionsNames
    .map(createOption)
    .reduce((acc, curr) => acc + curr)
}

function createContryRow ({ name, companies }) {
  const createP = (name) => `<p>${name}</p>`
  const numberOfCompanies = companies.length
  const comapinesNames = companies
    .map((company) => createP(Object.keys(company)))
    .reduce((acc, curr) => acc + curr)

  return `<tr>
            <td class="countriesTd">${name}</td>
            <td class="nOfCompaniesTd">${numberOfCompanies}</td>
            <td class="CompanyNamesTd"><div class="companies">${comapinesNames}</div></td>
          </tr>`
}

function createRegionCard ({ name, countries }) {
  return `<div class="region-card">
            <h2>${name}</h2>
            <table>
              <thead>
                <tr>
                  <td class="countriesTd" >Paises</td>
                  <td class="nOfCompaniesTd" >Numero de compañias</td>
                  <td class="CompanyNamesTd" >Nombre de las compañias</td>
                </tr>
              </thead>
              <tbody>
                ${countries
                  .map(createContryRow)
                  .reduce((acc, curr) => acc + curr)}
              </tbody>
            </table>
          </div>`
}

function renderHTML (data) {
  $('#root').innerHTML = data
}

function renderSelectRegion (selectedRegion) {
  const selectedRegionData = companies.regions.find(
    (region) => region.name === selectedRegion
  )

  selectedRegion
    ? renderHTML(createRegionCard(selectedRegionData))
    : renderHTML('Error')
}

const companies = await fetchData('./companies.json')
const regionsNames = companies.regions.map((region) => region.name)
const regionsCards = companies.regions.map(createRegionCard)

initHTMLSelect(regionsNames)
renderHTML(regionsCards)

$('#select').addEventListener('change', (event) => {
  const selectedRegion = event.target.value
  renderSelectRegion(selectedRegion)
})

// eslint-disable-next-line no-return-assign
const toggleHide = (element) => (element.hidden = !element.hidden)

$('#countries').addEventListener('click', () => {
  document.querySelectorAll('.countriesTd').forEach(toggleHide)
})
$('#nOfCompanies').addEventListener('click', () => {
  document.querySelectorAll('.nOfCompaniesTd').forEach(toggleHide)
})
$('#CompanyNames').addEventListener('click', () => {
  document.querySelectorAll('.CompanyNamesTd').forEach(toggleHide)
})
