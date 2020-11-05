<template>
  <v-container>
    <PostsForm @onSubmit="onSubmit($event)" />

    <div class="pa-md-10 pa-3" v-if="posts.length">
      <p>Кол-во статей просканировано: <b>{{ quantity }}</b></p>
      <p>Найдено: <b>{{ posts.length }}</b></p>
      <PostItem
          v-for="post in posts"
          :post="post"
          :key="post.title"
      />
    </div>

    <ProgressCircular v-if="isLoad" />
  </v-container>
</template>

<script>
import PostsForm from '@/components/PostsForm'
import getPosts from '@/services/getPosts'
import PostItem from '@/components/posts/PostItem'
import ProgressCircular from '@/components/ui/ProgressCircular'

export default {
  name: 'search',
  components: {
    ProgressCircular,
    PostItem,
    PostsForm
  },
  data: () => ({
    posts: [],
    quantity: 0,
    isLoad: false
  }),
  methods: {
    async onSubmit(data) {
      this.isLoad = true
      const response = await getPosts(data)
      this.isLoad = false
      this.posts = response.posts
      this.quantity = response.quantity
    }
  }
}
</script>
