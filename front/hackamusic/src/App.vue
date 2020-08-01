<template>

<div id="app">

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

export default {

//registro el footer para mostralo en toda la web
name: 'footerMusic',
components: {

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

#footer {
  color: white;
  background-color: black;
  position: sticky;
  bottom: 0;
  left: 0;
  max-height: 3px;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 50px;
}



</style>
