<template>
  <v-app>

    <Header />

    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- Todo (!) создать единый компонент прелоадера <ProgressCircular> -->
    <!-- Todo (!) удалить лоадеры из других роутов -->
    <!-- <ProgressCircular v-if="isLoad" /> -->

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

  methods: {
  }
}
</script>
