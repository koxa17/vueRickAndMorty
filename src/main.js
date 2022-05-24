import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/style/font.css'
import '@/assets/style/style.css'

const app = createApp(App).use(router)

app.use(store).mount('#app')
