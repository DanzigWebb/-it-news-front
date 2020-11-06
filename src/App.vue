<template>
  <v-app>

    <Header />

    <v-main>
      <router-view></router-view>
    </v-main>

    <ProgressCircular />

  </v-app>
</template>

<script>
import Header from '@/components/template/Header'
import ProgressCircular from '@/components/ui/loader/ProgressCircular'

export default {
  name: 'App',

  components: {
    Header,
    ProgressCircular,
  },
}
</script>
