import { createApp } from 'vue'
import App from './App.vue'

import { Form, Input, Button, Select } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//import locale from 'element-plus/lib/locale/lang/es'

const app = createApp(App)

// Element
const components = [Form, Input, Select, Button]
components.forEach(x => app.use(x))

// Directive
app.directive('hidden', (el, binding) => {
  el.classList.add(`hidden-${binding.arg}`)
})

app.mount('#app')
