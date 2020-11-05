<template>
  <v-container>
    <h2>Home Page Motherfaker</h2>

    <div class="pa-md-10 pa-3" v-if="posts.length">
      <p>Кол-во статей: {{quality}}</p>
      <PostItem
          v-for="post in posts"
          :post="post"
          :key="post.title"
      />
    </div>
  </v-container>
</template>

<script>
import PostItem from '@/components/posts/PostItem'
import getDefaultPosts from '@/services/getDefaultPosts'

export default {
  name: 'Home',

  components: {
    PostItem,
  },

  data: () => ({
    posts: [],
    quality: 0
  }),

  created() {
    this.getPosts()
  },

  methods: {
    async getPosts() {
      const response = await getDefaultPosts()
      this.posts = response.posts
      this.quality = response.quantity
    }
  }
}
</script>
