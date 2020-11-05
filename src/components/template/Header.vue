<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <div class="d-flex align-center">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
      />

      <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
      />
    </div>

    <div class="header__links">
      <router-link to="/" v-slot="{ navigate, isExactActive }">
        <v-btn
            small text
            :disabled="isExactActive"
            @click="navigate">
          Домой
        </v-btn>
      </router-link>

      <router-link to="/search" v-slot="{ navigate, isExactActive }">
        <v-btn
            small text
            :disabled="isExactActive"
            @click="navigate">
          Поиск
        </v-btn>
      </router-link>
    </div>

  </v-app-bar>
</template>

<script>
export default {
  methods: {
    setColor(isActive) {
      return isActive ? 'error' : 'normal'
    }
  }
}
</script>

<style lang="scss">
.header {
  &__links {
    padding-left: 2rem;
  }
  &__link {
    text-decoration: none;
  }
}
</style>
