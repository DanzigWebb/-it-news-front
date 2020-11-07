<template>

  <div class="pa-md-10 pa-3">
    <slot></slot>

    <p>Найдено: <b>{{ posts.length }}</b></p>

    <PostItem
        v-for="post in visiblePosts"
        :post="post"
        :key="post.title"
    />

    <v-btn v-if="posts.length > visiblePosts.length"
           @click="setVisiblePosts()"
           color="primary">
      <span>Больше постов ({{ this.visiblePosts.length }} / {{ this.posts.length }})</span>
    </v-btn>
  </div>

</template>

<script>
import PostItem from '@/components/posts/PostItem'

export default {
  components: {
    PostItem
  },
  data: () => ({
    visiblePosts: [],
    step: 5,
    currentStep: 0,
  }),

  props: {
    posts: Array
  },

  created() {
    this.setVisiblePosts()
  },

  methods: {
    setVisiblePosts() {
      this.currentStep = this.currentStep + this.step
      this.visiblePosts = this.posts.slice(0, this.currentStep)
    }
  }
}
</script>

