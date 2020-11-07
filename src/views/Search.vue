<template>
  <v-container>
    <PostsForm @onSubmit="onSubmit($event)" />

    <PostsWrapper
        v-if="posts.length"
        :posts="posts"
    />

  </v-container>
</template>

<script>
import getPosts from '@/services/posts/getPosts'

import PostsForm from '@/components/posts/PostsForm'
import PostItem from '@/components/posts/PostItem'
import PostsWrapper from '@/components/posts/PostsWrapper'

export default {
  name: 'search',
  components: {
    PostsWrapper,
    PostItem,
    PostsForm
  },
  data: () => ({
    posts: [],
    quantity: 0,
  }),
  methods: {
    onSubmit(data) {
      getPosts(data).subscribe(({posts, quantity}) => {
        this.posts = posts
        this.quantity = quantity
      })
    },
  }
}
</script>
