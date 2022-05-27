<template>
  <nav class="d-flex justify-content-center">
    <paginate
        v-model="currentPage"
      :page-count="totalPages"
      :page-range="range"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :prev-text="'Предыдущая'"
      :next-text="'Следующая'"
      :click-handler="changePage"
    />
  </nav>
</template>

<script>
import Paginate from 'vuejs-paginate-next';
export default {
  name: "Pagination",
  props: ['total', 'perPage', 'pageSize', 'range'],
  components: {Paginate},
  data() {
    return {
      currentPage: 1,
    }
  },
  created() {
    this.currentPage = +this.$route.query.page || 1
  },
  computed: {
    totalPages() {
      return this.currentPage <= this.pageSize ? this.pageSize : Math.ceil(this.total / this.perPage)
    }
  },
  methods: {
    async changePage(pageNumber) {
      this.currentPage = pageNumber
      await this.$router.replace({ query: {page: pageNumber} })
    },
  }
}
</script>

<style>
.page-item.active .page-link {
  border-radius: 5px;
  background: #0dcaf0;
  border-color: #0dcaf0;
  color: white;
}

.pagination .page-item .page-link{
  cursor: pointer;
}

.pagination .page-link:focus {
  box-shadow: none;
}
</style>