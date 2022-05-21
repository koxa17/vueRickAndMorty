import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/style/font.css'
import '@/assets/style/style.css'
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App).use(router)

app.use(store).use(VueFullPage).mount('#app')
