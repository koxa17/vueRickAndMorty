<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/images/RickandMortyLogo.png" alt="" class="nav-bar-menu-logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/all-cards/episodes">Эпизоды</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/all-cards/characters">Персонажи</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/all-cards/locations">Локации</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="About">О сайте</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Поиск</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuNavBar",
  data() {
    return {
      currentPage: ''
    }
  },
  created() {
    this.currentPage = this.$route.params.pageName
  }
}
</script>

<style scoped>
nav {
  padding: 15px 0;
}

.nav-bar-menu-logo {
  width: 124px;
  height: 40px;
}

.navbar-nav {
  font-size: 18px;
  font-weight: bold;
}

li.nav-item a.nav-link.router-link-exact-active {
  color: #01abc2;
  text-decoration: underline;
}
</style>