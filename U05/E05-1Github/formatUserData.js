export function formatUserData (userList) {
  return (/* html */ `
        <div class="profiles-users">
        ${userList.map((user) => /* html */ `
            <div class="profile-user">
                <img src="${user.avatar_url}" alt="${user.login}"/>
                <div class="wrapper">
                    <h2>${user.login}</h2>
                    <p>Creation date: ${user.created_at}</p>
                </div>
            </div>`).join('')}
        </div>
    `)
}
