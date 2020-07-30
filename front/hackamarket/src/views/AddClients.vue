<template>
  <div class="AddClients">
    <h1>Formulario para añadir nuevo cliente</h1>
    <p v-show="errorMsg">Te faltan datos</p>
    <input type="text" v-model="nombre" placeholder="Nombre" />
    <input type="text" v-model="usuario" placeholder="Usuario" />
    <input type="password" v-model="passw" placeholder="Contraseña" />
    <input type="text" v-model="email" placeholder="Email" />
    <input type="text" v-model="foto" placeholder="foto" />
    <button class="button" @click="validatingData()">Añadir nuevo cliente</button>
    <p></p>
  </div>
</template>

<script>

import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "AddClients",
  components: {},
  data() {
    return {
      nombre: "",
      usuario: "",
      passw: "",
      email: "",
      foto: "",
      errorMsg: false
    };
  },
  methods: {
    validatingData() {
      if (
        this.nombre === "" ||
        this.usuario === "" ||
        this.passw === "" ||
        this.email === "" ||
        this.foto === ""
      ) {
        alert("No puedes dejar campos vacios");
       this.errorMsg = true
       this.createClient = false;
      } else {
        this.createClient = true;
        this.addNewClient();
      }
    },
    addNewClient() {
      if (this.createClient === true) {
        var self = this;
        axios
          .post("http://localhost:3050/add-clients", {
            nombre: self.nombre,
            usuario: self.usuario,
            passw: self.passw,
            email: self.email,
            foto: self.foto,
            createClient: false
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        this.createClient = false;
        Swal.fire({
        title: "Cliente creado correctamente!",
        onclose: () => {
          location.reload;
        }
      });
      } else {
        console.log("yo no debería estar aquí");
      }
    }
  }
};
</script>

<style scoped>
.AddClients{
	font: 95% Arial, Helvetica, sans-serif;
	max-width: 400px;
	margin: 10px auto;
	padding: 16px;
	background: #F7F7F7;
  
}
.AddClients h1{
	background: green;
	padding: 20px 0;
	font-size: 140%;
	font-weight: 300;
	text-align: center;
	color: #fff;
	margin: -16px -16px 16px -16px;
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

.button:hover {background-color: green}

.button:active {
  background-color:green;
  box-shadow: 0 5px #666;
  transform: translateY(4px);

}


</style>