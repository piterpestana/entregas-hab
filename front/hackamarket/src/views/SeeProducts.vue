<template>

  <products :productos="productos"></products>



</template>

<script>
import axios from "axios";
import products from "@/components/Products.vue";

export default {
  name: "Productos",
  components: {
    products
  },
   data() {
    return {
      productos: []
    };
  },
  methods: {
   getProducts() {
      var self = this;

      axios
        .get("http://localhost:3050/productos")
        .then(function(response) {
          self.productos = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
},
    created() {
      this.getProducts();
    }
  }
  
</script>

<style scoped>
</style>

