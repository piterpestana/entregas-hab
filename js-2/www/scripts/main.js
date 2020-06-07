//Elements

const list = document.getElementById('basket')
const botonR = document.querySelectorAll('.boton')

//Funciones

const borrarElemento = e => {
    if (e.target.classList.contains('delete-card')) {
        e.target.parentElement.remove()
    }

}
//esto por qué funciona si pone basket?
const addElemento = elemento => {
    basket.appendChild(elemento)
}

const crearElemento = mensaje => {


    const li = document.createElement('div')
    li.id = 'item' + mensaje.id
    li.className = 'item-item'
    li.innerHTML = `
    <section>
        <img src="${mensaje.foto}" alt="${mensaje.nombre}" class="img_aside">
        <h2 class="name">${mensaje.nombre}</h2>
        <h3 class="price">${mensaje.precio}</h3>
        <button class="delete-card" data-id="${mensaje.id}">Eliminar</button>
    </section>
`
    addElemento(li)

}

const extraerDatos = datos => {

    const tarjeta = {
        foto: datos.querySelector('.foto').src,
        nombre: datos.querySelector('h2').textContent,
        precio: datos.querySelector('h3').textContent,
        id: datos.getAttribute('id')
    }
    crearElemento(tarjeta)

}

const enviarMensaje = e => {
    e.preventDefault()
    extraerDatos(e.target.parentElement)

}

// Listeners
botonR.forEach(boton => { boton.addEventListener('click', e => enviarMensaje(e)) })
list.addEventListener('click', borrarElemento)
