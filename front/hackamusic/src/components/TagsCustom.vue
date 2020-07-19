<template>
  <div>
    <h1>Loved most:</h1>
    <h2>{{thetags[0].name}}</h2>
    <h1>Loved least:</h1>
    <h2>{{thetags[thetags.length - 1].name}}</h2>
    <ul style="list-style-type:none;">
      <li v-for="tag in thetags" :key="tag.id">
        Tag: {{tag.name}} ｜ Reach: {{tag.reach}} ｜
        <button class="button">
          <a :href="tag.url">Check the style</a>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  name: "TagsCustom",

  data() {
    return {
      thetags: []
    };
  },

  created() {
    api.getTopTags().then(response => (this.thetags = response.data.tags.tag));
  }
};
</script>


<style scoped>


h2 {
  color: red;
}


.button {
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #ed3330;
margin-bottom: 20px;
padding: 20px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
}

.button:hover {
background: #434343;
letter-spacing: 1px;
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}
</style>
