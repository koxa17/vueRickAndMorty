<template>
  <div class="card card-character flex-grow-1 flex-md-grow-0">
    <div class="card__character__bg">
      <img src="@/assets/images/location.jpg" alt="" class="card__character__bg__img">
    </div>
    <div class="card__body">
      <div class="card__body">
        <div class="card__body__info">
          <p>Name: <span>{{location.name}}</span></p>
        </div>
        <div class="card__body__info">
          <p>Type: <span>{{location.type}}</span></p>
        </div>
        <div class="card__body__info">
          <p>Count residents: <span>{{totalResidents}}</span></p>
        </div>
      </div>
      <div class="card__footer text-end"><a href="#" class="card__footer__link link-info" :data-id="location.id">Подробнее...</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLocation",
  props: {
    location: {
      type: Object,
      required: true
    }
  },
  computed: {
    totalResidents() {
      return this.location.residents.length
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__footer {
    &__link a{
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .card__body__info {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    & p {
      margin: 0;
      font-size: 20px;
      color: rgb(158, 158, 158);
      & span {
        color: black;
      }
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