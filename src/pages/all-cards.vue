<template>
  <page-template page-name="episodes">
    <div class="row">
      <div class="col">
        <h1 class="title text-center">
          {{ pageTitle }}
        </h1>
      </div>
    </div>
    <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 row-cols-xxl-5 pt-4 pb-4" v-if="finishLoadContent">
      <!--      <template v-if="$route.params.pagename === 'episodes'">-->
      <!--        <div class="col pb-4" v-for="item in data" :key="item.id">-->
      <!--          <card-episode :episode="item"/>-->
      <!--        </div>-->
      <!--      </template>-->
      <!--      <template v-if="$route.params.pagename === 'characters'">-->
      <!--        <div class="col pb-4"  v-for="item in data" :key="item.id">-->
      <!--          <card-character :character="item"/>-->
      <!--        </div>-->
      <!--      </template>-->
      <!--      <template v-if="$route.params.pagename === 'locations'">-->
      <!--        <div class="col pb-4" v-for="item in data" :key="item.id">-->
      <!--          <card-location :location="item"/>-->
      <!--        </div>-->
      <!--      </template>-->


      <div class="col pb-4" v-for="item in data" :key="item.id">
        <component :is="cardComponent" :episode="item" :character="item" :location="item" :key="item.id"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pt-1 pb-4" v-if="finishLoadContent">
        <pagination :total="total" :per-page="20"
                     :range="4" />
      </div>
    </div>
  </page-template>
</template>

<script>
import PageTemplate from "@/layouts/page-template";
import {getAllEpisodes, getAllCharacters, getAllLocations} from "@/api/requests";
import Pagination from "@/components/Pagination";
import CardEpisode from "@/components/CardEpisode";
import CardCharacter from "@/components/CardCharacter";
import CardLocation from "@/components/CardLocation";
import {markRaw} from "vue";

export default {
  name: "all-card",
  components: {Pagination, PageTemplate},
  data() {
    return {
      data: [],
      total: 0,
      forceLoad: 0,
      finishLoadContent: false
    }
  },
  created() {
    this.forceLoad++
  },
  methods: {
    getEpisodes(pageNumber = 1) {
      getAllEpisodes(pageNumber).then(response => {
        this.total = response.info.count
        this.data = response.results
        this.perPage = response.info.pages
      })
    },
    getCharacters(pageNumber = 1) {
      getAllCharacters(pageNumber).then(response => {
        this.total = response.info.count
        this.data = response.results
        this.perPage = response.info.pages
      })
    },
    getLocations(pageNumber = 1) {
      getAllLocations(pageNumber).then(response => {
        this.total = response.info.count
        this.data = response.results
        this.perPage = response.info.pages
      })
    },

  },
  computed: {
    pageTitle() {
      let title;
      switch (this.pageName) {
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
    },

    loadContent(){
      return this.pageName + this.pageNumber + this.forceLoad;
    },

    pageName() {
      return this.$route.params.pagename || null
    },

    pageNumber() {
      return this.$route.query.page || 1
    },

    cardComponent() {
      switch (this.pageName) {
        case 'episodes' :
          return markRaw(CardEpisode)
        case 'characters' :
          return markRaw(CardCharacter)
        case 'locations' :
          return markRaw(CardLocation)
        default :
          return null;
      }
    },

  },
  watch: {

    async loadContent() {
      this.data = []
      this.finishLoadContent = false
      switch (this.pageName) {
        case 'episodes' :
           await this.getEpisodes(this.pageNumber)
            this.finishLoadContent = true
          break;
        case 'characters' :
           await this.getCharacters(this.pageNumber)
            this.finishLoadContent = true
          break;
        case 'locations' :
           await this.getLocations(this.pageNumber)
            this.finishLoadContent = true
          break;
      }
    },

  }
}
</script>

<style scoped>
.episodes .title {
  font-size: 3.5rem;
  font-weight: bold;
}
</style>