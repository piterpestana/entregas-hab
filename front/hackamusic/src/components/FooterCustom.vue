<template>
  <div>
    <footer id="footer">
      <p>This website was created by Pedro during a Hack a Boss Bootcamp</p>
      <br />
      <p>July 2020</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footerCustom"
};
</script>

<style scoped>

#footer {
  color: white;
  background-color: black;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 50px;
}
</style>
