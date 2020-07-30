<template>
  <div class="home">
    <h1>Lista de clientes</h1>

    <p>
      <clientes v-on:datos="mostrarInfoCliente" v-on:borrar="borrandoCliente" :clientes="clientes"></clientes>

      <!-- MODAL PARA ACTUALIZAR CLIENTE -->
    </p>
    <div class="modal" v-show="seeModal">
      <div class="modalBox">
        <h3>Actualiza los datos de tu cliente:</h3>
        <input type="text" placeholder="Nombre actualizado" v-model="nombreActualizado" />
        <br />
        <input type="text" placeholder="Usuario del cliente" v-model="usuarioActualizado" />
        <br />
        <input type="password" placeholder="Password del cliente" v-model="passwActualizada" />
        <br />
         <input type="text" placeholder="Email del cliente" v-model="emailActualizado" />
        <br />
        <input type="text" placeholder="Foto del cliente" v-model="fotoActualizada" />
        <br />
        <button @click="seeModal =! seeModal">Cancelar</button>
        <button @click="actualizarClientes()">Actualizar cliente</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import clientes from "@/components/Clientes.vue";

export default {
  name: "Home",
  components: {
    clientes
  },
  data() {
    return {
      clientes: [],
      idClientes: "",
      nombreActualizado: "",
      usuarioActualizado: "",
      passwActualizada: "",
      emailActualizado: "",
      fotoActualizada: "",
      seeModal: false
    };
  },
  methods: {
    actualizarClientes() {
      var self = this;
      axios
        .put("http://localhost:3050/update/" + self.idCliente, {
          nombre: self.nombreActualizado,
          usuario: self.usuarioActualizado,
          passw: self.passwActualizada,
          email: self.emailActualizado,
          foto: self.emailActualizada,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      location.reload();
    },

    borrandoCliente(indiceCliente) {
      var self = this;
      axios
        .delete("http://localhost:3050/delete/" + indiceCliente)
        .then(function(response) {
          console.log(response).catch(function(error) {
            console.log(error);
          });
        });
      location.reload();
    },

    mostrarInfoCliente(datosCliente) {
      this.nombreActualizado = datosCliente.nombre;
      this.usuarioActualizado = datosCliente.apellido;
      this.passwActualizada = datosCliente.ciudad;
      this.emailActualizado = datosCliente.empresa;
      this.emailActualizado = datosCliente.empresa;
      this.idCliente = datosCliente.id;
      this.seeModal = true;
    },
    getClients() {
      var self = this;

      axios
        .get("http://localhost:3050/clientes")
        .then(function(response) {
          self.clientes = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getClients();
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modalBox {
  background-color: #fefefe;
  margin: 2% auto;
  padding: 3rem;
  width: 80%;
  border: 1px solid grey;
}
</style>
