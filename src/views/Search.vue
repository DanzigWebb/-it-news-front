<template>
  <v-container>
    <PostsForm @onSubmit="onSubmit($event)" />

    <div class="pa-md-10 pa-3" v-if="posts.length">
      <p>Кол-во статей просканировано: <b>{{ quantity }}</b></p>
      <p>Найдено: <b>{{ posts.length }}</b></p>

      <PostItem
          v-for="post in visiblePosts"
          :post="post"
          :key="post.title"
      />

      <v-btn v-if="posts.length > visiblePosts.length"
             @click="setVisiblePosts()"
             color="primary">
        <span>Больше постов ({{this.visiblePosts.length }} / {{ this.posts.length }})</span>
      </v-btn>
    </div>

  </v-container>
</template>

<script>
import PostsForm from '@/components/posts/PostsForm'
import PostItem from '@/components/posts/PostItem'
import getPosts from '@/services/posts/getPosts'

export default {
  name: 'search',
  components: {
    PostItem,
    PostsForm
  },
  data: () => ({
    visiblePosts: [],
    step: 5,
    currentStep: 0,

    posts: [],
    quantity: 0,
    isLoad: false
  }),
  methods: {
    async onSubmit(data) {
      const response = await getPosts(data)
      const {posts, quantity} = response
      this.posts = posts
      this.quantity = quantity
      this.setVisiblePosts()
    },

    setVisiblePosts() {
      this.currentStep = this.currentStep + this.step
      this.visiblePosts = this.posts.slice(0, this.currentStep)
    },
  }
}
</script>
