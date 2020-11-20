<template lang='pug'>
.o-contact
  .o-contact__message
    h1
      span Encuentra tu
      br
      span.f-bold DEPA!

  .o-contact__form
    el-form(:modal='form')
      el-form-item(label='Nombre')
        el-input(v-model='form.name')

      el-form-item(label='Celular')
        el-input(v-model='form.phone')

      el-form-item(label='Email')
        el-input(v-model='form.email')

      el-form-item(label='DNI')
        el-input(v-model='form.dni')

      el-form-item(label='Proyecto de Interés')
        el-select(v-model='form.project_related_ids' placeholder='Proyecto')
          el-option(v-for='i in 5' :label="`name - ${i}`" :value="`name${i}`")

      el-form-item(label='Comentario')
        el-input(type='textarea' v-model='form.observation')

      el-form-item
        el-button(type='primary') Enviar
</template>

<script>
export default {
  name: 'OContact',
  data () {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        dni: '',
        project_related_ids: [],
        observation: ''
      }
    }
  }
}
</script>

<style scoped lang='sass'>
@import './contact.sass'
</style>
