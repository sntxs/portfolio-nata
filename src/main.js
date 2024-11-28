import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faHtml5, 
    faCss3Alt, 
    faBootstrap, 
    faJs, 
    faVuejs, 
    faReact, 
} from '@fortawesome/free-brands-svg-icons'

library.add(faHtml5, faCss3Alt, faBootstrap, faJs, faVuejs, faReact)

createApp(App).mount('#app')