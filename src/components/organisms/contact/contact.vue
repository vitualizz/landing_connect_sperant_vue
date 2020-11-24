<template lang='pug'>
.o-contact
  .o-contact__message
    h1
      span.f-thin Encuentra tu
      br
      span DEPA!


  el-form(
    ref='form'
    :model='form'
    :rules='rules'
  ).o-contact__form
    el-form-item(
      label='Nombre'
      prop='name'
    )
      el-input(v-model='form.name')

    el-form-item(
      label='Celular'
      prop='phone'
    )
      el-input(v-model.number='form.phone')

    el-form-item(
      label='Email'
      prop='email'
    )
      el-input(v-model='form.email')

    el-form-item(
      label='DNI'
      prop='document'
    )
      el-input(v-model.number='form.document')

    el-form-item(
      label='Proyecto de Interés'
      prop='project_related_id'
    )
      el-select(
        v-loading='projectsLoad'
        v-model='form.project_related_id'
        placeholder='Proyecto'
      )
        el-option(
          v-for='project in projects'
          :label='project.name'
          :value='project.id'
        )

    el-form-item(
      label='Comentario'
      prop='observation'
    )
      el-input(
        type='textarea'
        v-model='form.observation'
        :autosize="{ minRows: 4, maxRows: 5}"
      )

    el-form-item
      el-button(
        @click='onClickSubmit'
        type='primary'
      ) Enviar
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
        document: '',
        project_related_id: null,
        observation: ''
      },
      rules: {
        name: [
          { required: true, message: 'Ingresa tu nombre.', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Ingresa tu número de celular.', trigger: 'blur' },
          { type: 'number', message: 'Ingresa un número de celular válido', trigger: 'change' }
        ],
        email: [
          { required: true, message: 'Ingresa tu email.', trigger: 'blur' },
          { type: 'email', message: 'Ingresa un email válido', trigger: 'blur' }
        ],
        document: [
          { required: true, message: 'Ingresa tu DNI.', trigger: 'blur' },
          { type: 'number', message: 'Ingresa un número de documento válido', trigger: 'change' }
        ],
        project_related_id: [
          { required: true, message: 'Selecciona un Proyecto de Interés.', trigger: 'change' }
        ],
        observation: [
          { required: true, message: 'Ingresa un comentario.', trigger: 'blur' }
        ],
      },
      projects: [],
      projectsLoad: false
    }
  },
  mounted () {
    this.getProjects()
  },
  methods: {
    async getProjects () {
      try {
        this.projectsLoad = true

        const { data } = await this.axios.get('/projects/list')

        this.projects = data
        this.projectsLoad = false
      } catch (e) {
        console.log(e)
      }
    },
    onClickSubmit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.submitForm()
        } else {
          return false
        }
      })
    },
    submitForm () {
      alert('Enviadooo')
    }
  }
}
</script>

<style scoped lang='sass'>
@import './contact.sass'
</style>
