<template>
  <v-app>

    <Header />

    <v-main>
      <router-view></router-view>
    </v-main>

    <ProgressCircular v-if="isLoading" />

  </v-app>
</template>

<script>
import ProgressCircular from '@/components/ui/ProgressCircular'
import Header from '@/components/template/Header'

export default {
  name: 'App',

  components: {
    Header,
    ProgressCircular,
  },

  data: () => ({
    isLoading: false,
  }),

  methods: {
  }
}
</script>
