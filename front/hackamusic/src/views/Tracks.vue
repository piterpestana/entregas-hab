<template>
  <div class="listados">
    <toptracks />

    <ul style="list-style-type:none;">
      <li v-for="track in tracks" :key="track.id">Cancion: {{track.name}} ｜</li>

    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import toptracks from '@/components/TracksCustom.vue'
import api from '@/api/index.js'




export default {
  name: 'TopTracks',
  components: {
    toptracks
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

</style>