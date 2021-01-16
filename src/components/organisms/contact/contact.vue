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
    v-loading='formLoad'
  ).o-contact__form
    el-form-item(
      label='Nombre'
      prop='fname'
    )
      el-input(v-model='form.fname')

    el-form-item(
      label='Celular'
      prop='phone'
    )
      el-input(v-model='form.phone')

    el-form-item(
      label='Email'
      prop='email'
    )
      el-input(v-model='form.email')

    el-form-item(
      label='DNI'
      prop='document'
    )
      el-input(v-model='form.document')

    el-form-item(
      label='Proyecto de Interés'
      prop='project_related'
    )
      el-select(
        v-loading='projectsLoad'
        v-model='form.project_related'
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
      formLoad: false,
      form: {
        fname: '',
        phone: '',
        email: '',
        document: '',
        project_related: null,
        observation: '',
        input_channel_id: 25,
        source_id: 78,
        interest_type_id: 4,
        utm_source: 'Lumingo',
        utm_medium: 'PortalInmobiliario',
        utm_campaign: 'Lumingo',
        app: 'Lumingo'
      },
      rules: {
        fname: [
          { required: true, message: 'Ingresa tu nombre.', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Ingresa tu número de celular.', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Ingresa tu email.', trigger: 'blur' },
          { type: 'email', message: 'Ingresa un email válido', trigger: 'blur' }
        ],
        document: [
          { required: true, message: 'Ingresa tu DNI.', trigger: 'blur' }
        ],
        project_related: [
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

        this.projectsLoad = false
        this.$message({
          message: 'Upps, no pudimos obtener los proyectos, ¡recarga la página!.',
          type: 'error'
        })

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
    async submitForm () {
      try {
        this.formLoad = true
        await this.axios.post('/clients/register', this.form)

        this.formLoad = false
        this.$refs.form.resetFields()

        this.$message({
          message: 'Ya tenemos tus datos, pronto nos pondremos en contacto contigo.',
          type: 'success'
        })

      } catch (e) {

        this.formLoad = false
        this.$message({
          message: 'Upps, no pudimos guardar tus datos, te contactaremos.',
          type: 'error'
        })

      }
    }
  }
}
</script>

<style scoped lang='sass'>
@import './contact.sass'
</style>
