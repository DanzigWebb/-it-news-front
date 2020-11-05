<template>
  <v-container>
    <PostsForm @onSubmit="onSubmit($event)" />

    <div class="pa-md-10 pa-3" v-if="posts.length">
      <p>Кол-во статей: {{ quality }}</p>
      <PostItem
          v-for="post in posts"
          :post="post"
          :key="post.title"
      />
    </div>
  </v-container>
</template>

<script>
import PostsForm from '@/components/PostsForm'
import getPosts from '@/services/getPosts'
import PostItem from '@/components/posts/PostItem'

export default {
  name: 'search',
  components: {
    PostItem,
    PostsForm
  },
  data: () => ({
    posts: [],
    quantity: 0
  }),
  methods: {
    async onSubmit(data) {
      const response = await getPosts(data)
      this.posts = response.posts
      this.quantity = response.quantity
    }
  }
}
</script>
