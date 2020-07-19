<template>

<div id="app">
<!-- Declaro el footer para mostrarlo en toda la web -->
<footermusic />

<div id="nav">
  <router-link to="/">Home</router-link> |
   <router-link to="/topartist">Top Artists</router-link> |
   <router-link to="/toptracks">Top Tracks</router-link> |
  <router-link to="/about">About</router-link>
</div>
<router-view/>
<!-- añado el HTML Del footer porque no consigo aplicar el componente -->
<footer id="footer">
<p>This website was created by Pedro during a Hack a Boss Bootcamp</p>
<br />
<p>July 2020</p>
</footer>

</div>
</template>

<script>

//Importo el footer para mostrarlo en toda la web
import footerMusic from '@/components/FooterCustom.vue'
export default {

//registro el footer para mostralo en toda la web
name: 'footerMusic',
components: {
footerMusic
},

}
</script>

<style>
#app {
  
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  color: white;
  padding: 30px;
  background-color: black;
  font-weight: bold;
}


#nav a{
  color: white;
 
}


#nav a.router-link-exact-active {
  color: red;
}

ul {
  font-size: 20px;
}




</style>
