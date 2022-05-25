<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{disabled: +currentPage === 1}">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
      </li>
      <template v-for="page in totalPages" :key="page">
        <li class="page-item" :class="{active: +currentPage === page}"><a class="page-link" href="#" @click.prevent="changePage(page)">{{page}}</a></li>
      </template>
      <li class="page-item" :class="{disabled: +currentPage === totalPages}">
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
  created() {
    this.currentPage = this.$route.query.page || 1
  },
  computed: {
    totalPages() {
      return this.currentPage <= this.pageSize ? this.pageSize : Math.ceil(this.total / this.item)
    }
  },
  methods: {
    async changePage(pageNumber) {
      this.currentPage = pageNumber
      await this.$router.replace({ query: {page: pageNumber} })
      this.$emit('page-changed')
    },
  }
}
</script>

<style scoped>
.page-item.active .page-link {
  border-radius: 5px;
  background: #0dcaf0;
  border-color: #0dcaf0;
  color: white;
}

.page-link:focus {
  box-shadow: none;
}
</style>