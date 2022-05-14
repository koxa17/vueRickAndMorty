<template>
    <transition name="fade">
      <div class="preloader">
        <img src="@/assets/images/preloader.gif" alt="Загрузка ...">
      </div>
    </transition>
</template>

<script>
export default {
  name: "pagePreloader"
}
</script>

<style scoped lang="scss">
.preloader {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #D1D1D3;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  & img {
    max-width: 64px;
    max-height: 64px;
  }

}

.fade-enter-active, .fade-leave-active{
transition: opacity 1s;
}

.fade-enter, .fade-leave {
  opacity: 0;
}

</style>