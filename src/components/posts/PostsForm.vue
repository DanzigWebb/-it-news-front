<template>
  <v-form v-model="valid" @submit.prevent="onSubmit()">
    <v-row align="center">
      <v-col
          class="d-flex"
          cols="12"
          md="4"
      >
        <v-select
            label="Кол-во страниц"
            :items="pages"
            v-model="currentPage"
            filled
        />
      </v-col>

      <v-col
          class="d-flex"
          cols="12"
          md="4"
      >
        <v-text-field
            label="Темы"
            v-model="inputSubject"
            filled />
      </v-col>
    </v-row>
    <v-row>
      <v-col
          class="d-flex"
          cols="12"
          md="12"
      >
        <v-btn
            color="primary"
            class="mr-4"
            type="submit"
        >
          Дай статьи
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'PostsForm',

  data: () => ({
    valid: false,
    pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    subjects: ['JavaScript', 'Angular', 'Vue'],
    currentPage: null,
    currentSubject: null,
    inputSubject: ''
  }),
  created() {
    const [page] = this.pages
    const [subject] = this.subjects
    this.currentPage = page
    this.currentSubject = subject
  },
  methods: {
    onSubmit() {
      const data = {
        page: this.currentPage,
        subject: this.parseSubjects()
      }

      this.$emit('onSubmit', data)
    },

    parseSubjects() {
      return this.inputSubject.toLowerCase().split(',').map(item => item.trim())
    }
  }
}
</script>
