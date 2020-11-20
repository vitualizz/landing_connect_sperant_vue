import { createApp } from 'vue'
import App from './App.vue'
import { Button, Input } from 'element-plus'

const app = createApp(App)

// Element
const components = [Button, Input]
components.forEach(component => app.use(component))

// Directive
app.directive('hidden', (el, binding) => {
  el.classList.add(`hidden-${binding.arg}`)
})

app.mount('#app')
