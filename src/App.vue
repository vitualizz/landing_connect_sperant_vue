<template lang='pug'>
Home
</template>

<script>
import Home from '@pages/home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  mounted () {
    this.axiosConfig()
  },
  methods: {
    axiosConfig () {
      const baseUrl = 'https://kuuost331l.execute-api.us-east-2.amazonaws.com/latest'
      this.axios.defaults.baseURL = baseUrl
    }
  }
}
</script>

<style lang='sass'>
@import '~@assets/styles/main.sass'
</style>
