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

    <ProgressCircular v-if="isLoad" />
  </v-container>
</template>

<script>
import PostItem from '@/components/posts/PostItem'
import getDefaultPosts from '@/services/getDefaultPosts'
import ProgressCircular from '@/components/ui/ProgressCircular'

export default {
  name: 'Home',

  components: {
    ProgressCircular,
    PostItem,
  },

  data: () => ({
    posts: [],
    quality: 0,
    isLoad: false
  }),

  created() {
    this.getPosts()
  },

  methods: {
    async getPosts() {
      this.isLoad = true
      const response = await getDefaultPosts()
      this.isLoad = false
      this.posts = response.posts
      this.quality = response.quantity
    }
  }
}
</script>
