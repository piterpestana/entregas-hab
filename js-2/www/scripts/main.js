//Elements

const list = document.getElementById('basket')
const botonR = document.querySelectorAll('.boton')


//Funciones

const borrarElemento = e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }

}

const addElemento = elemento => {
    basket.appendChild(elemento)
}



const crearElemento = mensaje => {


    const li = document.createElement('p')
    li.textContent = mensaje
    const button = document.createElement('button')
    button.classList = 'delete'
    button.textContent = 'x'
    li.appendChild(button)
    addElemento(li)

}



const extraerDatos = datos => {

    const tarjeta = {
        foto: datos.querySelector('.foto').src,
        nombre: datos.querySelector('h2').innerText,
        precio: datos.querySelector('h3').innerText
    }
    const tarjetaString = JSON.stringify(tarjeta)

    // No consigo convertir este objeto en código que se lea HTML. La foto necesitaría un href, 
    // el nombre un h1, etc. Puedo convertirlo en un array y cambiar cada valor 
    // pero sigue apareciendo en formato array. 
    // Leyendo por internet, He intentado esto:  
    // const tarjetaString = JSON.stringify(tarjeta,[`<img class="foto" src=${tarjeta.foto}`, `<h2>${tarjeta.nombre}</h2>`, `<h2>${tarjeta.nombre}</h2>`]) 
    

crearElemento(tarjetaString)
}


const enviarMensaje = e => {

    extraerDatos(e.target.parentElement)

}

// Listeners
botonR.forEach(boton => { boton.addEventListener('click', enviarMensaje) })
list.addEventListener('click', borrarElemento)
