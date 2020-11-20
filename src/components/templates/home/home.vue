<template lang='pug'>
.t-home
  ONavbar(v-hidden:mobile-up)
  .t-home__wrapper
    .t-home__wrapperSide(v-hidden:mobile)
      h1 Gaaaaaa
    .t-home__wrapperSide
      OContact
</template>

<script>
import ONavbar from '@organisms/navbar'
import OContact from '@organisms/contact'

export default {
  name: 'THome',
  components: {
    ONavbar,
    OContact
  }
}
</script>

<style scoped lang='sass'>
@import './home.sass'
</style>
