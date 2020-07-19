

<template>
  <div class="artists">
    <input type="search" v-model="search" placeholder="Busca por nombre">
  <topartists />

   <ul style="list-style-type:none;">
     <li v-for="artist in artists" :key="artist.id">
      Artista: {{artist.name}} ｜
      Oyentes: {{artist.listeners}} ｜
      Página de la artista: <a :href="artist.url"> Pincha aquí </a> 
      
     </li>
   </ul>

  </div>
</template>

<script>
// @ is an alias to /src
import topartists from '@/components/ArtistCustom.vue'
import api from '@/api/index.js'



export default {
  name: 'TopArtist',
  components: {
    topartists
  },
  created() {
    api.getArtists().then(response => (this.artists = response.data.topartists.artist))
  },
  data(){
    return {
      artists: [],
      search: ''
    }

  },

  //Función de buscar, pero no he conseguido que funcione
   computed: {
    filtered(){
      if(!this.search){
        return this.artists
      }
      return this.artists.filter(artist => 
      artist.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
};

</script>

<style scoped>



</style>
