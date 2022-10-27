const movies$$ = document.querySelector('.movies');


const allMovies = () => {
    fetch('http://localhost:8000/movies/')
    .then((res) => res.json())
    .then((movies) => pintar(movies));
}

const deleteMovie = async (event) => {
    console.log(event.target.value);
    await fetch('http:/localhost:8000/movies/delete/' + event.target.value, {
        method: 'DELETE', 
    });
    
};


const pintar = (movies) => {
    for (const movie of movies) {
        console.log(movie);
        const movie$$ = document.createElement('div');
        const title$$ = document.createElement('h3');
        const img$$ = document.createElement('img');
        const movies$$ = document.querySelector('.movies');
        const button$$ = document.createElement('button');

        button$$.textContent = 'BORRAR PELÍCULA';
        button$$.value = movie._id;
        button$$.classList.add('boton');
        title$$.textContent = movie.title;
        img$$.src = movie.img;

        img$$.classList.add('img');
        movie$$.classList.add('movie')


        movie$$.appendChild(title$$);
        movie$$.appendChild(img$$);
        movie$$.appendChild(button$$);
        movies$$.appendChild(movie$$);
        


        button$$.addEventListener('click', deleteMovie);
    }
}



allMovies();





/* const peticion = () => {
    fetch('http://localhost:8000/movies/title/' + select$$.value)
    .then((res) => res.json())
    .then((movie) => borrar(movie));
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
}; */

/* button$$.addEventListener('click', peticion)

getMovies(); */