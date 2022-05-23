<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <div class="full-screen">
          <div class="full-screen__body">
            <div class="full-screen__title">
              <img src="@/assets/images/RickandMortyLogo.png" alt="" id="title" class="full-screen__title-img"
                   @mouseenter="removeOpacityText" @mouseleave="addedOpacityText">
            </div>
            <div class="full-screen__text">
              <a href="#episodes" id="subtitle" class="link-anchor" @mouseenter="removeOpacityText"
                 @mouseleave="addedOpacityText">Листай дальше что бы увидеть больше</a>
            </div>
          </div>
          <video preload="auto" autoplay data-keepplaying loop class="bg-video" ref="bgVideo" poster="@/assets/images/bg_home.jpg">
            <source src="@/assets/video/RickAndMorty-1-season.mp4" type="video/mp4">
          </video>

          <div class="btns-actions-bg">
            <button type="button" class="btn btn-light btn-pause" @click="videoPauseAndPlay">
              <img v-show="videoBtn.statusVideo === 'pause'" src='@/assets/images/icons/pause.svg' alt="Звук выключить"
                   class="btn-icon">
              <img v-show="videoBtn.statusVideo === 'play'" src='@/assets/images/icons/play.svg' alt="Звук включить"
                   class="btn-icon">
            </button>
            <button type="button" class="btn btn-light btn-pause" @click="volumeOnAndOff">
              <img v-show="videoBtn.volumeSwitch === 'Off'" src='@/assets/images/icons/volume_sound_muted.svg'
                   alt="Звук выключить" class="btn-icon">
              <img v-show="videoBtn.volumeSwitch === 'On'" src='@/assets/images/icons/volume_sound.svg'
                   alt="Звук включить"
                   class="btn-icon">
            </button>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="cards" v-if="episodes">
                <div class="cards__title">
                  <h3 class="title text-center text-md-start">
                    <router-link to="/episodes" class="title__link decoration-text decoration-text--episode">Эпизоды</router-link>
                  </h3>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4 mb-3 d-flex justify-content-center d-md-block"
                       v-for="episode in episodes" :key="episode.id">
                    <card-episode :episode="episode"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="cards" v-if="characters">
                <div class="cards__title">
                  <h3 class="title text-center text-md-start">
                    <a href="#" class="title__link decoration-text decoration-text--characters">Персонажи</a>
                  </h3>
                </div>

                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4 mb-3 d-flex justify-content-center d-md-block"
                       v-for="character in characters" :key="character.id">
                    <card-character :character="character"/>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="cards" v-if="locations">
                <div class="cards__title">
                  <h3 class="title text-center text-md-start">
                    <a href="#" class="title__link decoration-text decoration-text--location">Локации</a>
                  </h3>
                </div>

                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4 mb-3 d-flex justify-content-center d-md-block"
                       v-for="location in locations" :key="location.id">
                    <card-location :location="location"/>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import CardEpisode from '@/components/CardEpisode.vue';
import CardCharacter from "@/components/CardCharacter";
import CardLocation from "@/components/CardLocation";
import {getCharacters, getEpisodes, getLocations} from "@/api/requests";
import {randomIdEpisode} from '@/js/index.js'

export default {
  name: 'HomePage',
  async mounted() {
    this.$refs.bgVideo.volume = 0;
    this.opacityScreenBodyBlock()
    this.episodes = await this.getEpisodesPreview(3)
    this.characters = await this.getCharactersPreview(3)
    this.locations = await this.getLocationPreview(3)
  },
  components: {
    CardLocation,
    CardCharacter,
    CardEpisode
  },
  data() {
    return {
      videoBtn: {
        statusVideo: "pause",
        volumeSwitch: 'Off'
      },
      episodes: null,
      characters: null,
      locations: null,
      options: {
        licenseKey: 'gplv3-license',
        anchors: ['main', 'episodes', 'characters', 'locations'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['main', 'episodes', 'characters', 'locations'],
      },
    };
  },
  methods: {
    videoPauseAndPlay() {
      const video = this.$refs.bgVideo
      if (video.paused) {
        video.play();
        this.videoBtn.statusVideo = "pause";
      } else {
        video.pause();
        this.videoBtn.statusVideo = "play";
      }
    },
    volumeOnAndOff() {
      const video = this.$refs.bgVideo
      if (video.volume === 0) {
        video.volume = 1.0;
        this.videoBtn.volumeSwitch = "On";
      } else {
        video.volume = 0;
        this.videoBtn.volumeSwitch = "Off";
      }
    },
    opacityScreenBodyBlock() {
      setTimeout(() => {
        return this.addedOpacityText()
      }, 2000)
    },
    removeOpacityText() {
      document.querySelector('#title').classList.remove('full-screen__title-img--opacity')
      document.querySelector('#subtitle').classList.remove('link-anchor--opacity')
    },
    addedOpacityText() {
      document.querySelector('#title').classList.add('full-screen__title-img--opacity')
      document.querySelector('#subtitle').classList.add('link-anchor--opacity')
    },
    async getEpisodesPreview(count) {
      let episodes = [];
      for (let i = 0; i < count; i++) {
        await getEpisodes(randomIdEpisode()).then(res => {
          episodes.push(res)
        })
      }
      return episodes
    },
    async getCharactersPreview(count) {
      let characters = [];
      for (let i = 0; i < count; i++) {
        await getCharacters(randomIdEpisode()).then(res => {
          characters.push(res)
        })
      }
      return characters
    },
    async getLocationPreview(count) {
      let locations = [];
      for (let i = 0; i < count; i++) {
        await getLocations(randomIdEpisode()).then(res => {
          locations.push(res)
        })
      }
      return locations
    }
  },
}
</script>

<style scoped lang="scss">
.full-screen {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btns-actions-bg {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 5;
}

.full-screen__body {
  color: white;
  position: absolute;
  z-index: 5;
  background: rgba(0, 0, 0, .5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.full-screen__title-img, .link-anchor {
  transition: opacity 0.6s;

  &--opacity {
    transition: opacity 0.6s;
    opacity: 0.5;
  }
}

.full-screen__title-img {
  width: 100%;
  height: auto;
}

.link-anchor {
  font-size: 1.3rem;
  text-decoration: none;
  color: #00afc7;
  text-shadow: 0 0 2rem #deeb24;
  -webkit-text-stroke: 1px #08424b;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;

  &:hover {
    text-shadow: #deeb24 0 0 3rem;
    letter-spacing: 6px;
  }
}

@media (min-width: 768px) {
  .link-anchor {
    font-size: 2rem;
  }
}

.bg-video {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Add some content at the bottom of the video/page */
.content {
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

/* Style the button used to pause/play the video */
.btn-pause {
  padding: 10px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  .btn-icon {
    width: 20px;
    height: 20px;
  }
}

.btn-pause:hover {
  color: black;
}

.home__content {
  background: white;
  position: relative;
  z-index: 5;
}

.cards__title {
  text-align: start;

  & .title {
    font-size: 3.5rem;
    font-weight: bold;
    margin: 20px 0 30px 0;

    &__link {
      text-decoration: none;
      color: inherit;

      &:hover.decoration-text--episode::before {
        background: #90c32f;
        transition: left 0.6s;
        left: 70%;
      }

      &:hover.decoration-text--characters::before {
        background: #90c32f;
        transition: left 0.6s;
        left: 75%;
      }

      &:hover.decoration-text--location::before {
        background: #90c32f;
        transition: left 0.6s;
        left: 67%;
      }

    }
  }

  .cards {
    margin-bottom: 50px;
  }

  .decoration-text {
    padding: 30px 0 8px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 6%;
      bottom: 10px;
      width: 150px;
      height: 14px;
      transform: skew(-12deg) translateX(-50%);
      background: #acd3ec;
      z-index: -1;
      transition: left 0.6s;
    }

    &--episode::before {
      left: 30%;
    }

    &--characters::before {
      left: 24%;
    }

    &--location::before {
      left: 31%;
    }
  }

}
</style>
