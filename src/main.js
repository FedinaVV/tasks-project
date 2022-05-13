import { createApp } from 'vue'
import App from './App'
import './styles/styles.scss'
import components from '@/components/UI'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')

