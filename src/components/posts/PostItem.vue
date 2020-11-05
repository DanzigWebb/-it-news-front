<template>
  <div class="post">
    <h2 class="post__title">{{ post.title }}</h2>
    <div class="post__description" v-html="post.description"></div>
    <br>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: Object
  },
  methods: {
  }
}
</script>

<style lang="scss">
.post {
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
