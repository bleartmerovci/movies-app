export function getMovies({page, search}) {
    let api = `https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0${(page == undefined) ? '' : `&page=${page}`}`

    if(search != undefined && search.length > 0) {
        api = `https://api.themoviedb.org/3/search/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&query=${search}`
    }

    return fetch(api)
    .then(response => response.json())
    .then(data => data)
}

export function composeMovies(movies, limit=null) {
    const data = (limit == null) ? movies : movies.slice(0, limit)
    let html = `<div class="row">`

    for (let movie of data) {
        const image = (movie.backdrop_path == null) ? './assets/img/noimage.png' : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
        html += `
        <div class="col-3">
            <div class="card mb-4">
                <img src="${image}" class="card-img-top" alt="${movie.original_title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.original_title}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text">
                            <i class="bi bi-fire"></i> ${movie.popularity}
                            <br />
                            <i class="bi bi-bar-chart"></i> ${movie.vote_average}
                        </p>
                        <a href="movie.html?id=${movie.id}" class="btn btn-sm btn-outline-secondary"><i class="bi bi-eye"></i> <small>DETAILS</small></a>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    html += `</div>`

    return html
}