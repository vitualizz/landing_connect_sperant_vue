import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/es'

const app = createApp(App)

// Element
app.use(ElementPlus, { locale })

// Directive
app.directive('hidden', (el, binding) => {
  el.classList.add(`hidden-${binding.arg}`)
})

app.mount('#app')
