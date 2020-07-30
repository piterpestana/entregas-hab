<template>
  <div>
    <h1>Lista de Productos</h1>
    <div class="listado">
    <ul style="list-style-type:none">
      <li class="product-card" v-for="producto in productos" :key="producto.id">
        <p><img class="img" :src="producto.imagen"></p>
        <p class="name">{{producto.nombre}}</p>
        <p class="details">Unidades: {{producto.stock}}</p>
        <p class="details">Disponibilidad</p><span :class="{
            green: producto.disponiblidad === 'Disponible',
            red: producto.disponibilidad === 'No disponible',
            }"
            >{{producto.disponibilidad}}</span>
          
<br>
        <button class="button" @click="comprarProducto()">Comprar</button>
        <button class="button" @click="reservarProducto()">Reservar</button>
      </li>
    </ul>
    </div>
  </div>
</template>
 
<script>
import Swal from "sweetalert2";

export default {
  name: "Productos",
 props: {
    productos: Array
  },
  
 
  methods: {
    comprarProducto() {
      Swal.fire({
        title: "Producto comprado!",
        onclose: () => {
          location.reload;
        }
      });
    },
    reservarProducto() {
      Swal.fire({
        title: "Producto reservado!",
        onclose: () => {
          location.reload;
        }
      });
    },

   
  }
};
</script>

<style scoped>



.listado {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  
}

.product-card {
    width: 380px;
    box-shadow: 0 2px 7px #dfdfdf;
    margin: 50px auto;
    background: white;
  
}

.name {
  font-family: fantasy;
  font-size: 40px;
}

.details {
  font-size: 20px;
}

.green {
  color: green;
  font-size: 20px;
}

.red {
  color: red;
  font-size: 20px;
}

.img {
  padding: 20px;
max-width: 200px;
max-height: 200px;
}

.button {
    
  
    margin: 20px;
    display: inline-block;
    padding: .75rem 1.25rem;
    border-radius: 10rem;
    color:darkblue;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .15rem;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.button:hover {background-color: red}

.button:active {
  background-color: red;
  box-shadow: 0 5px #666;
  transform: translateY(4px);

}

</style>

