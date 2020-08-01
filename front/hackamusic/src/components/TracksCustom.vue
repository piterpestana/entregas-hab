<template>
  
      <div class="listados">
 

    <ul style="list-style-type:none;">
      <li v-for="track in tracks" :key="track.id">Cancion: {{track.name}} ｜</li>

    </ul>
  </div>

  


</template>

<script>
import api from '@/api/index.js'
export default {
  name: 'TracksCustom',
  props: {
    msg: String
  },
  data(){
    return {
      tracks: []
    }},
    
  created() {
    api.getTopTracks().then(response => (this.tracks = response.data.tracks.track))
  }
 


}
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}
</style>

