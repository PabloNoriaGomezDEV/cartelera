const requestURL="json/documentaries.json";

async function fetchMoviesJson() {
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies => {
    for (let index = 0; index < movies.documentaries.length; index++)
    {
        const moviesSection = document.getElementById('movieSection');

        let id = movies.documentaries[index].id;
        let tittle = movies.documentaries[index].tittle;
        let poster = movies.documentaries[index].poster;
        let year = movies.documentaries[index].year;
        let duration = movies.documentaries[index].duration;
        let synopsys = movies.documentaries[index].synopsys;
        let director = movies.documentaries[index].director;

        moviesSection.innerHTML += ` 
    <div class="card" style="width: 18rem;">
        <img src="${poster}" class="card-img-top" alt="documentary poster">
        <div class="card-body">
        <h5 class="card-title">${tittle}</h5>
        <p class="card-title"><span class="h6">${year}</span> . ${duration}</p>
        <h6 class="card-title mb-4">${director}</h6>
        <p class="card-text">${synopsys}</p>
        </div>
    </div>
    `
    }
})
