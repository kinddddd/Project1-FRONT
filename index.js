const peticion = () => {
    fetch('http://localhost:8000/movies/')
    .then((res) => res.json())
    .then((movies) => pintar(movies));
}


const pintar = (movies) => {
    for (const movie of movies) {
        console.log(movie);
        const movie$$ = document.createElement('div');
        const title$$ = document.createElement('h3');
        const img$$ = document.createElement('img');
        const movies$$ = document.querySelector('.movies');

        title$$.textContent = movie.title;
        img$$.src = movie.img;

        img$$.classList.add('img');
        movie$$.classList.add('movie')

        movie$$.appendChild(title$$);
        movie$$.appendChild(img$$);
        movies$$.appendChild(movie$$);
    }
}
    

peticion();