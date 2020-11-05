<template>
  <div class="post">
    <h2 class="post__title">{{ post.title }}</h2>
    <div class="post__description" v-html="post.description"></div>
    <br>
    <hr>
    <br>
    <v-btn
        @click="goToPost(post.link)"
        outlined
        rounded
        text
    >
      Link
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: Object
  },
  methods: {
    goToPost(link) {
      window.open(link)
    }
  }
}
</script>

<style lang="scss">
.post {
  max-width: 800px;
  margin: 0 auto 2rem;
  display: grid;

  img {
    max-width: 100%;
  }

  &__title {
    font-size: 1.6rem;
    margin: 1rem 1rem 1rem 0;
  }
}
</style>
