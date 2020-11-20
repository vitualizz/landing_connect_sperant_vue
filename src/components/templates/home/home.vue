<template lang='pug'>
.t-home
  ONavbar(v-hidden:mobile-up)
  .t-home-wrapper
    .t-home-wrapperSide(v-hidden:mobile)
      h1 Gaaaaaa
    .t-home-wrapperSide
      OContactForm
</template>

<script>
import ONavbar from '@organisms/navbar'
import OContactForm from '@organisms/contact_form'

export default {
  name: 'THome',
  components: {
    ONavbar,
    OContactForm
  }
}
</script>

<style scoped lang='sass'>
@import './home.sass'
</style>
