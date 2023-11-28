import './style.css'
import { formatUserData } from './formatUserData'

document.querySelector('#app').innerHTML = /* html */ `
  <div class="wrapper">
    <input type="text" class="user-name"/>
    <button class="check-user">Check user</button>
  </div>
  <div class="result"></div>
`

function getDataFromUser (users) {
  return Promise.all(
    users.map((user) => fetch(user.url).then((res) => res.json()))
  )
}

document.querySelector('.check-user').addEventListener('click', async () => {
  const username = document.querySelector('.user-name').value
  const result = document.querySelector('.result')

  try {
    const user = await fetch(`https://api.github.com/users/${username}`).then(
      (res) => res.json()
    )

    if (user.message) {
      result.innerHTML = /* html */`<p> ${user.message}</p>`
      return
    }

    const followers = await fetch(user.followers_url).then((res) => res.json())
    const following = await fetch(
      `https://api.github.com/users/${username}/following`
    ).then((res) => res.json())

    const followersData = await getDataFromUser(followers)
    const followingData = await getDataFromUser(following)

    result.innerHTML = /* html */ `
                      <div class="user">
                        <img src="${user.avatar_url}" alt="${user.login}"/>
                        <h2>${user.login}</h2>
                        <p>Creation date: ${user.created_at}</p>
                      </div>
                      <div class="followers-info">
                        <h3>Follwers (${user.followers})</h3>
                          ${formatUserData(followersData)}
                      </div>
                      <div class="following-info">
                        <h3>Following (${user.following})</h3>
                          ${formatUserData(followingData)}
                      </div>
    `
  } catch (error) {
    result.innerHTML = /* html */`<p>Error: ${error.message}</p>`
  }
})
