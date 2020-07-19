<template>
  <div>
    <!-- <input type="search" v-model="search" placeholder="Busca por nombre"> -->

    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link :to="{name: 'TopArtist'}">Top Artist</router-link>
    <router-link :to="{name: 'TopTags'}">Top Tags</router-link>
    <router-link :to="{name: 'About'}">Top Tags</router-link>
  </div>
</template>

<script>
export default {
  name: "HomeCustom",
  props: {
    msg: String
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}
</style>
