const title$$ = document.querySelector('.title')
const img$$ = document.querySelector('.img')
const director$$ = document.querySelector('.director')
const year$$ = document.querySelector('.year')
const genre$$ = document.querySelector('.genre')


const button$$ = document.querySelector('.enviar');

const enviarFormulario = async () => {
    const datos = {
        title: title$$.value,
        director: director$$.value,
        year: year$$.value,
        img: img$$.value,
        genre: genre$$.value,
    };

    const datosAEnviar = JSON.stringify(datos);

    const respuesta$$ = document.createElement('p');

    try {
        await fetch('http://localhost:8000/movies/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: datosAEnviar,
        });
        respuesta$$.textContent = 'SE HA CREADO LA PELÍCULA CORRECTAMENTE';
        console.log(datosAEnviar);
    } catch (error) {
        respuesta$$.textContent = 'NO SE HA PODIDO CREAR LA PELÍCULA'
    }

    document.body.appendChild(respuesta$$);
};

button$$.addEventListener('click', enviarFormulario);