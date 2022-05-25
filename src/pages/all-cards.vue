<template>
  <page-template page-name="episodes">
    <div class="row">
      <div class="col">
        <h1 class="title text-center">
          {{ pageTitle }}
        </h1>
      </div>
    </div>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 pt-4 pb-4" v-if="data">
      <template v-if="$route.params.category === 'episodes'">
        <div class="col pb-4" v-for="item in data" :key="item.id">
          <card-episode :episode="item"/>
        </div>
      </template>
      <template v-if="$route.params.category === 'characters'">
        <div class="col pb-4"  v-for="item in data" :key="item.id">
          <card-character :character="item"/>
        </div>
      </template>
      <template v-if="$route.params.category === 'locations'">
        <div class="col pb-4" v-for="item in data" :key="item.id">
          <card-location :location="item"/>
        </div>
      </template>
    </div>
    <div class="row">
      <div class="col-12 pt-1 pb-4" v-if="data">
        <pagination v-model="page" :total="total" :item="data.length" :page-size="perPage"
                    @page-changed="changePage($event)"/>
      </div>
    </div>
  </page-template>
</template>

<script>
import PageTemplate from "@/layouts/page-template";
import CardEpisode from "@/components/CardEpisode";
import {getAllEpisodes, getAllCharacters, getAllLocations} from "@/api/requests";
import Pagination from "@/components/Pagination";
import CardCharacter from "@/components/CardCharacter";
import CardLocation from "@/components/CardLocation";
export default {
  name: "all-card",
  components: {CardLocation, CardCharacter, Pagination, PageTemplate, CardEpisode},
  data() {
    return {
      data: null,
      page: 1,
      total: 0,
      perPage: 0,
      load: false
    }
  },
  async created() {
    await this.getData(this.$route.params.category, this.$route.query.page)
  },
  methods: {

    async getData(category, pageNumber = 1) {
      switch (category) {
        case 'episodes' :
          await this.getEpisodes(pageNumber)
          break;
        case 'characters' :
          await this.getCharacters(pageNumber)
          break;
        case 'locations' :
          await this.getLocations(pageNumber)
          break;
      }
    },

    async changePage() {
      await this.getData(this.$route.params.category, this.$route.query.page)
    },

    async getEpisodes(pageNumber = 1) {
      await getAllEpisodes(pageNumber).then(response => {
        this.total = response.info.count
        this.data = response.results
        this.perPage = response.info.pages
      })
    },
    async getCharacters(pageNumber = 1) {
      await getAllCharacters(pageNumber).then(response => {
        this.total = response.info.count
        this.data = response.results
        this.perPage = response.info.pages
      })
    },
    async getLocations(pageNumber = 1) {
      await getAllLocations(pageNumber).then(response => {
        this.total = response.info.count
        this.data = response.results
        this.perPage = response.info.pages
      })
    },
  },
  computed: {
    pageTitle() {
      let title;
      switch (this.$route.params.category) {
        case 'episodes':
          title = 'Эпизоды'
          break;
        case 'characters':
          title = 'Персонажи'
          break;
        case 'locations':
          title = 'Локации'
          break;
      }
      return title
    }
  }
}
</script>

<style scoped>
.episodes .title {
  font-size: 3.5rem;
  font-weight: bold;
}
</style>