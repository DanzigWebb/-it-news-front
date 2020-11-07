<template>
  <v-container>
    <h2>Home Page Motherfaker</h2>

    <PostsWrapper
        v-if="posts.length"
        :posts="posts"
    />

  </v-container>
</template>

<script>
import getDefaultPosts from '@/services/posts/getDefaultPosts'

import PostItem from '@/components/posts/PostItem'
import PostsWrapper from '@/components/posts/PostsWrapper'

export default {
  name: 'home',

  components: {
    PostsWrapper,
    PostItem,
  },

  data: () => ({
    posts: [],
    quality: 0,
  }),

  created() {
    this.getPosts()
  },

  methods: {
    getPosts() {
      getDefaultPosts().subscribe(({posts, quantity}) => {
        this.posts = posts
        this.quality = quantity
      })
    }
  }
}
</script>
