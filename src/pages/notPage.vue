<template>
    <div class="not-found-page not-found-page--bg">
      <div class="not-found-page__overlay"></div>
      <div class="not-found-page__content">
        <h1 class="title">404</h1>
        <h2 class="subtitle">Page Not Fount!</h2>
      </div>
    </div>
</template>

<script>
export default {
  name: "notPage"
}
</script>

<style scoped lang="scss">
.not-found-page {
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("@/assets/images/404notPage.jpg") no-repeat top center / cover;
  font-family: 'schwifty', serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom:0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, .5);
    z-index: 2;
  }


  &__content {
    position: relative;
    z-index: 3;
    color: #01b2c9;
    opacity: .8;
    & .title {
      font-size: 20vw;
    }

    & .subtitle {
      font-size: 11vw;
    }
  }

}
</style>