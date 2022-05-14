<template>
  <div>
    <menu-nav-bar></menu-nav-bar>
    <div class="container pt-3">
      <slot></slot>
    </div>
  </div>

</template>

<script>
import MenuNavBar from '@/components/MenuNavBar.vue'
export default {
  name: "page-template",
  components: {
    MenuNavBar
  }
}
</script>

<style scoped>

</style>