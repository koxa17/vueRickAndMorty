<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{disabled: currentPage === 1}">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
      </li>
      <template v-for="page in totalPages" :key="page">
        <li class="page-item" :class="{disabled: currentPage === page}"><a class="page-link" href="#" @click.prevent="changePage(page)">{{page}}</a></li>
      </template>
      <li class="page-item" :class="{disabled: currentPage === totalPages}">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: ['total', 'item', 'pageSize'],
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    totalPages() {
      return this.pageSize !== this.currentPage ? Math.ceil(this.total / this.item) : this.pageSize
    }
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber
      this.$emit('page-changed', pageNumber)
    },
  }
}
</script>

<style scoped>

</style>