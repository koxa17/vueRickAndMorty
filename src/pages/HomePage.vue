<template>
  <div class="home">
  <div class="full-screen">
    <div class="full-screen__body" id="fullScreenBody" @mouseenter="removeOpacityForfullScreenBody" @mouseleave="addedOpacityForfullScreenBody">
      <div class="full-screen__title">
        <img src="@/assets/images/RickandMortyLogo.png" alt="" class="full-screen__title-img">
      </div>
      <div class="full-screen__text">
        <a href="#home__content" class="link-anchor">Листай дальше что бы увидеть больше</a>
      </div>
    </div>
    <video preload="auto" autoplay loop class="bg-video" ref="bgVideo" poster="@/assets/images/bg_home.jpg">
      <source src="@/assets/video/RickAndMorty-1-season.mp4" type="video/mp4">
    </video>

    <div class="btns-actions-bg">
      <button type="button" class="btn btn-light btn-pause" @click="videoPauseAndPlay">
        <img v-show="videoBtn.statusVideo === 'pause'" src='@/assets/images/icons/pause.svg' alt="Звук выключить" class="btn-icon">
        <img v-show="videoBtn.statusVideo === 'play'" src='@/assets/images/icons/play.svg' alt="Звук включить" class="btn-icon">
      </button>
      <button type="button" class="btn btn-light btn-pause" @click="volumeOnAndOff">
        <img v-show="videoBtn.volumeSwitch === 'Off'" src='@/assets/images/icons/volume_sound_muted.svg' alt="Звук выключить" class="btn-icon">
        <img v-show="videoBtn.volumeSwitch === 'On'" src='@/assets/images/icons/volume_sound.svg' alt="Звук включить" class="btn-icon">
      </button>
    </div>
  </div>
  <div class="home__content" id="home__content">
    <div class="container pt-4 pb-3">
        <div class="row">
          <div class="col-12">
            <div class="cards">
              <div class="cards__title">
                  <h3 class="title">
                    <a href="#" class="title__link">Эпизоды</a>
                  </h3>
              </div>

              <div class="row">
                <div class="col-4">
                  <card-episode></card-episode>
                </div>
                <div class="col-4">
                  <card-episode></card-episode>
                </div>
                <div class="col-4">
                  <card-episode></card-episode>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardEpisode from '@/components/CardEpisode.vue';

export default {
  name: 'HomePage',
  mounted() {
    this.$refs.bgVideo.volume = 0;
    this.opacityFullScreenBodyBlock()
  },
  components: {
    CardEpisode
  },
  data() {
    return {
      videoBtn: {
        statusVideo: "pause",
        volumeSwitch: 'Off'
      }
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
    opacityFullScreenBodyBlock() {
      setTimeout(() => {
         return this.addedOpacityForfullScreenBody()
      }, 2000)
    },
    removeOpacityForfullScreenBody() {
      document.querySelector('#fullScreenBody').classList.remove('full-screen__body--opacity')
    },
    addedOpacityForfullScreenBody() {
      document.querySelector('#fullScreenBody').classList.add('full-screen__body--opacity')
    },
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
  position: relative;
  z-index: 5;
  transition: opacity 0.6s;

  &--opacity {
    opacity: 0.5;
  }
}

.full-screen__title-img {
  width: 100%;
  height: auto;
}

.link-anchor {
  font-size: 2rem;
  text-decoration: none;
  color: #00afc7;
  text-shadow: 0 0 2rem #deeb24;
  -webkit-text-stroke: 1px #08424b;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;

  &:hover{
    text-shadow: #deeb24 0 0 3rem;
    letter-spacing: 6px;
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
    font-size: 3rem;
    &__link {
      text-decoration: none;
      color: inherit;
      &:hover {
        color: #58ae33;
      }
    }
  }
}
</style>
