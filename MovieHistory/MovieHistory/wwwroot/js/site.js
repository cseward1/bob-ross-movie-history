$("#movieSearch__button").click(evt => {
    const userSearchString = $("#movieSearch").val()
    $.ajax({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=659e751fd435d62cb82ad337c2f6bd5elanguage=en-US&query=${userSearchString}&page=1&include_adult=false`,
        success: (Response => console.log(Response))
    })
});