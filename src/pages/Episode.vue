<template>
  <page-template page-name="episodes">
    <div class="row">
      <div class="col">
        <h1 class="title text-center">
          Эпизоды
        </h1>
      </div>
    </div>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 pt-4 pb-4" v-if="episodes">
        <div class="col pb-4" v-for="episode in episodes.results" :key="episode.id" >
          <card-episode :episode="episode" />
        </div>
    </div>
  </page-template>
</template>

<script>
import PageTemplate from "@/layouts/page-template";
import CardEpisode from "@/components/CardEpisode";
import {getAllEpisodes} from "@/api/requests";

export default {
  name: "Episode",
  components: {PageTemplate, CardEpisode},
  data() {
    return {
      episodes: null
    }
  },
  async mounted() {
    this.episodes = await getAllEpisodes()
  }
}
</script>

<style scoped>

</style>