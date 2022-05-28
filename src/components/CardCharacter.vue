<template>
  <div class="card card-character flex-grow-1 flex-md-grow-0">
    <div class="card__character__bg">
      <img :src="character.image" alt="" class="card__character__bg__img">
    </div>
    <div class="card__body">
      <div class="card__body__top d-flex justify-content-between align-items-center">
        <h4>
          <a href="#">{{character.name}}</a>
        </h4>
        <div class="status">
          <div class="status__icon" :class="`status__icon--${character.status.toLowerCase()}`"></div>
          <div class="status__life">{{character.status}} - {{character.species}}</div>
        </div>
      </div>
      <div class="card__body">
        <div class="card__body__info">
          <p>Место рождения:</p>
          <p>
            <a href="#" :data-url="character.origin.url">{{character.origin.name}}</a>
          </p>
        </div>
        <div class="card__body__info">
          <p>Последнее место нахождение:</p>
          <p>
            <a href="#" :data-url="character.location.url">{{character.location.name}}</a>
          </p>
        </div>
      </div>
      <div class="card__footer text-end"><a href="#" class="card__footer__link link-info" :data-id="character.id">Подробнее...</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCharacter",
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  max-width: 415px;

  &__character__bg {
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

    &__top {
      & h4 {
        margin: 0;
        font-weight: bold;

        & a{
          text-decoration: none;
          color: inherit;
          &:hover {
            color: #01abc2;
          }
        }
      }
    }

  }

  &__footer {
    &__link a{
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .status {
    display: flex;
    align-items: baseline;

    &__icon {
      width: 10px;
      height: 10px;
      display: flex;
      background: #9e9e9e;
      border-radius: 50%;
      margin-right: 5px;
      &--dead{
        background: #9e9e9e;
      }

      &--alive{
        background: #55cc44;
      }
    }
  }

  .card__body__info {
    & p {
      margin: 0;
      color: rgb(158, 158, 158);
    }


    & a{
      text-decoration: none;
      color: black;
      font-size: 20px;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom-color: #55cc44;
      }
    }
  }

}


</style>