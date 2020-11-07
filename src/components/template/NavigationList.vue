<template>
  <v-list>
    <!-- Link item -->
    <router-link to="/" v-slot="{ navigate, isExactActive }">
      <v-list-item @click="navigate" :disabled="isExactActive">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Домой</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>
    <!-- Link item -->
    <router-link to="/search" v-slot="{ navigate, isExactActive }">
      <v-list-item @click="navigate" :disabled="isExactActive">
        <v-list-item-icon>
          <v-icon>mdi-text-box-search</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Поиск</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>
  </v-list>
</template>
