<template>
  <div>
    <menu-nav-bar></menu-nav-bar>
    <div class="container pt-3" :class="pageName">
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
  },
  props: {
    pageName: {
      type: String,
      defaults: () => 'some page'
    }
  }
}
</script>

<style scoped>

</style>