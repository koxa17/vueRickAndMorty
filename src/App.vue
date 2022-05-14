<template>
  <div>
    <router-view/>
    <page-preloader/>
  </div>
</template>

<script>


import pagePreloader from "@/components/pagePreloader.vue";
export default {
  components: {pagePreloader}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body.preloader {
  overflow: hidden;
}

body.preloader div div.preloader {
  display: flex;
}
</style>
