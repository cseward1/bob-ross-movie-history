﻿//Allow the Favorite Movie Button to bring the user to another page with their favorite movies listed 

$("#AddFavoriteMovie").click(evt => {
    const userSearchString = $("#movieSearch").val()
    $.ajax({
        method: "GET",

        url: `https://api.themoviedb.org/3/search/movie?api_key=${moviedb.key}&language=en-US&query=${userSearchString}&page=1&include_adult=false`
    }).then(res => {
        MovieStore.movies = res.results
        let titles = "<div class='row'>"
        res.results.forEach((m, idx) => {

            titles += `
                <div class="col-md-3 movieGrid__movie" id="movie--${m.id}">
                    <h2 class="fakeLink">${m.title}</h2>
                    <img class="fakeLink" src="https://image.tmdb.org/t/p/w154${m.poster_path}" />
                </div>
            `
            if ((idx + 1) % 4 === 0) {
                titles += "</div><div class='row'>"
            }
        })

        titles += "</div>"

        $("#movieGrid").html(titles)

    })