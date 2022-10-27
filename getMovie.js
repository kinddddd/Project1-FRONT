const select$$ = document.querySelector('.select');
const button$$ = document.querySelector('button');
const movies$$ = document.querySelector('.movies');



const peticion = () => {
    fetch('http://localhost:8000/movies/title/' + select$$.value)
    .then((res) => res.json())
    .then((movie) => pintar(movie));
};

const getMovies = () => {
    fetch('http://localhost:8000/movies/')
    .then((res) => res.json())
    .then((movies) => rellenarSelect(movies));
};


const rellenarSelect = (movies) => {

    for (const movie of movies) {
        
        const option$$ = document.createElement('option');
    
        option$$.value = movie.title;
        option$$.textContent = movie.title;
        
        select$$.appendChild(option$$);
    }
    
};



const pintar = (movie) => {
        movies$$.innerHTML = "";
            console.log(movie);
            const movie$$ = document.createElement('div');
            const title$$ = document.createElement('h3');
            const img$$ = document.createElement('img');

            movie$$.classList.add('movie');
            title$$.textContent = movie.title;
            img$$.classList.add('img');
            img$$.src = movie.img;
            

            movie$$.appendChild(title$$);
            movie$$.appendChild(img$$);
            movies$$.appendChild(movie$$);
};
    
button$$.addEventListener('click', peticion)
getMovies();