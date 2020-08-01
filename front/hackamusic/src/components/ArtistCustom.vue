<template>
  <div class="artists">
    <input type="search" v-model="search" placeholder="Busca por nombre" />

    <ul style="list-style-type:none;">
      <li v-for="artist in artists" :key="artist.id">
        Artista: {{artist.name}} ｜
        Oyentes: {{artist.listeners}} ｜
        Página de la artista:
        <a :href="artist.url">Pincha aquí</a>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'

export default {
  name: 'ArtistCustom',
  props: {
    msg: String
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
  padding: 20px;
}
a {
  color: red;
}
</style>
