import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { Form, Input, Button, Select, Loading, Message } from 'element-plus'

const app = createApp(App)

// Axios
const baseUrl = 'https://g8an8lzut9.execute-api.us-east-1.amazonaws.com/latest'
axios.defaults.baseURL = baseUrl
app.use(VueAxios, axios)

// Element
const components = [Form, Input, Select, Button, Loading, Message]
components.forEach(x => app.use(x))

app.mount('#app')
