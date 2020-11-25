import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { Form, Input, Button, Select, Loading, Message } from 'element-plus'

const app = createApp(App)

// Axios
const baseUrl = 'https://kuuost331l.execute-api.us-east-2.amazonaws.com/latest'
axios.defaults.baseURL = baseUrl
axios.defaults.headers.Authorization = '1b7e8fa834d376146f5024ab8767e1e54da6bdf01df76248d6bace11db5eb442'
app.use(VueAxios, axios)

// Element
const components = [Form, Input, Select, Button, Loading, Message]
components.forEach(x => app.use(x))

app.mount('#app')
