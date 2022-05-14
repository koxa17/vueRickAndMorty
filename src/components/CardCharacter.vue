<template>
  <div class="card card-character flex-grow-1 flex-md-grow-0">
    <div class="card__character__bg">
      <img src="@/assets/images/baby-rick.jpeg" alt="" class="card__character__bg__img">
    </div>
    <div class="card__body">
      <div class="card__body__top d-flex justify-content-between align-items-center">
        <h4>
          <a href="#">Baby Rick</a>
        </h4>
        <div class="status">
          <div class="status__icon status__icon--alive"></div>
          <div class="status__life">Alive - Human</div>
        </div>
      </div>
      <div class="card__body">
        <div class="card__body__info">
          <p>Last known location:</p>
          <p>
            <a href="#">Citadel of Ricks</a>
          </p>
        </div>
        <div class="card__body__info">
          <p>First seen in:</p>
          <p>
            <a href="#">The Ricklantis Mixup</a>
          </p>
        </div>
      </div>
      <div class="card__footer text-end"><a href="#" class="card__footer__link link-info">Подробнее...</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCharacter"
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
    &:not(:last-child) {
      margin-bottom: 15px;
    }
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