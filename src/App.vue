<template>
  <v-app>
    <v-toolbar color="green" fixed top>
      <v-toolbar-side-icon large to="/">
        <v-icon color="yellow">keyboard_backspace</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Search</v-btn>
        <v-btn flat>Book</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      fixed
      bottom
      color="green"
    >
      <v-btn
        color="yellow"
        flat
        value="search"
        to="/"
      >
        <span>Search</span>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn
        color="yellow"
        flat
        value="booking"
        to="/booking"
      >
        <span>Booking</span>
        <v-icon>book</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recent'
    }
  },
  name: 'App'
}
</script>
