export function initHeader(div) {
  const user_is_loggedin = localStorage.getItem('loggedin_user')
  let links = ''
  let user = 'Guest'

  if(user_is_loggedin == null) {
    links = `
      <li><a class="dropdown-item" href="login.html">Login</a></li>
      <li><a class="dropdown-item" href="register.html">Register</a></li>
    `
  } else {
    user = user_is_loggedin
    links = `
      <li><a class="dropdown-item" href="dashboard.html">Dashboard</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" id="logout" href="#">Logout</a></li>
    `
  }
  
  div.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="index.html">MovieDB</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="movies.html">Movies</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ${user}
            </a>
            <ul class="dropdown-menu">
            ${links}
            </ul>
          </li>
        </ul>
        <form class="d-none ms-5" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  `
}