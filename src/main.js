import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Directive
app.directive('hidden', (el, binding) => {
  el.classList.add(`hidden-${binding.arg}`)
})

app.mount('#app')
