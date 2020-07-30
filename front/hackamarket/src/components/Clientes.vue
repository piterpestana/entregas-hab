<template>
  <div>
    <ul class="listado">
      <li class="product-card"  v-for="(cliente, index) in clientes" :key="cliente.id">
        <p>
          Nombre:
          {{cliente.nombre}}
        </p>
        <p>
          Usuario:
          {{cliente.usuario}}
        </p>
        <p>
          Password:
          {{cliente.passw}}
        </p>
        <p>
          Email:
          {{cliente.email}}
        </p>
     
        <p><img class="img" :src="cliente.foto"></p>
        <button class="button" @click="enviarDatosCliente(index)">Editar</button>
        <button class="button" @click="enviarIndiceCliente(index)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Clientes",
  props: {
    clientes: Array
  },
  methods: {
    
    enviarDatosCliente(index) {
      let datosCliente = this.clientes[index];
      this.$emit("datos", datosCliente);
    },
    enviarIndiceCliente(index) {
      let indiceCliente = this.clientes[index].id;
      this.$emit("borrar", indiceCliente);
    }
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




