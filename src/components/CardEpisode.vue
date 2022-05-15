<template>
  <div class="card card-episode flex-grow-1 flex-md-grow-0">
    <div class="card__episode__bg">
      <img src="@/assets/images/posters/season_1.webp" alt="" class="card__episode__bg__img">
    </div>
    <div class="card__body">
      <div class="card__body__top">
        <div class="card__body__top__left">
          <h4>{{episode.name}}</h4>
          <span>{{episode.episode}}</span>
        </div>
        <div class="card__body__top__right">
          <p>Дата выхода: <span>{{episode.air_date}}</span></p>
        </div>
      </div>
      <div class="card__body__link text-end"><a href="#" class="link-info" :data-id="episode.id">Подробнее...</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardEpisode",
  props: {
    episode:{
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
.card {
  max-width: 415px;
  height: 100%;

  &__episode__bg{
    max-width: 415px;
    &__img {
      width: 100%;
      height: 100%;
    }
  }

  &__body {
    padding: 15px 10px;
    text-align: left;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__top {
      &__left {
        display: flex;
        justify-content: space-between;

        & h4 {
          margin: 0;
          font-weight: bold;
        }

        & span {
          font-size: 1rem;
          font-style: italic;
          color: gray;
        }


      }

      &__right {
        margin-top: 5px;
        font-style: italic;
        & span {
          font-style: normal;
        }
      }
    }

    &__link a{
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

  }


}

</style>