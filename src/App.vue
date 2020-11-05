<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />

        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-btn
            v-if="isHasPosts"
            class="ma-2"
            color="primary"
            @click="back()"
            dark>
          <v-icon dark left>
            mdi-arrow-left
          </v-icon>
          <span>Back</span>
        </v-btn>
      </v-container>

      <PostsForm v-if="!isHasPosts" @onSubmit="sendData($event)" />

      <div class="pa-md-10 pa-3" v-if="isHasPosts">
        <PostItem
          v-for="post in posts"
          :post="post"
          :key="post.title"
        />
      </div>

    </v-main>

    <ProgressCircular v-if="isLoading" />
  </v-app>
</template>

<script>
import getMock from '@/services/getMock'
import awaitWithLoading from '@/services/loadingWrapper'

import PostsForm from './components/PostsForm'
import PostItem from '@/components/posts/PostItem'
import ProgressCircular from '@/components/ui/ProgressCircular'

export default {
  name: 'App',

  components: {
    ProgressCircular,
    PostItem,
    PostsForm,
  },

  data: () => ({
    isHasPosts: false,
    posts: [],
    isLoading: false,
  }),

  methods: {
    async sendData(data) {
      const mocks = await awaitWithLoading.call(this, getMock(data))
      this.isHasPosts = true
      this.posts = mocks
    },

    back() {
      this.isHasPosts = false
    }
  }
}
</script>
