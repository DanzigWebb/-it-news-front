<template>
  <v-app>

    <Header
        class="header"
    />

    <!--  Todo добавить сворачивание на моб устройствах  -->
    <v-navigation-drawer
        fixed dark
        permanent
        class="drawer"
    >
      <NavigationList />
    </v-navigation-drawer>

    <v-main class="main">
      <router-view></router-view>
    </v-main>

    <ProgressCircular />

  </v-app>
</template>

<script>
import Header from '@/components/template/Header'
import ProgressCircular from '@/components/ui/loader/ProgressCircular'
import NavigationList from '@/components/template/NavigationList'

export default {
  name: 'App',

  components: {
    NavigationList,
    Header,
    ProgressCircular,
  },
}
</script>

<style lang="scss" scoped>
$header__height: 64px;
$drawer__width: 256px;

.header {
  z-index: 20;
}

.drawer {
  padding-top: 64px;
}

.main {
  margin-left: $drawer__width;
  padding: 1rem;
}

</style>
