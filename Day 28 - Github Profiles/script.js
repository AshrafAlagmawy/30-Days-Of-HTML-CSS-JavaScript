const APIURL = 'https://api.github.com/users/'; // Root URL

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Getting the data through the api and fetch
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No profile found with this username');
    }
  }
}

// Getting Repositories
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created');

    addReposToCard(data);
  } catch (err) {
    createErrorCard('Problem fetching Repos');
  }
}

// Create the card
function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <div>
          <img
            class="avatar"
            src="${user.avatar_url}"
            alt="${user.name}"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio}
          </p>

          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
          </ul>

          <div id="repos"></div>

        </div>
      </div>
  `;

  main.innerHTML = cardHTML;
}

// Adding Repos to Card
function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

// Handling Error Messages
function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
      <h1> ${message} </h1>
    </div>
  `;

  main.innerHTML = cardHTML;
}

// Action when submitting the input
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = '';
  }
});
