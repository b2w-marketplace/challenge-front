<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
* {
  font-family: "Montserrat", sans-serif;
}
#app {
  // background-color: #353535 !important;
  min-height: 100vh;
  .container {
    @media screen and (max-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
