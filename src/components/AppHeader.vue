<template>
  <div class="ui inverted segment">
    <div class="ui inverted secondary pointing menu">
      <router-link to="/" class="active item">Vueimgur-Bucket</router-link>
      <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">
          <router-link to="/" class="item">Gallery</router-link>
          <router-link to="/upload" class="item">Upload</router-link>
          <a href="#" class="item" @click="logout">Sign Out</a>
        </div>
        <a v-else href="#" class="item" @click="login">Sign In</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"])
};
</script>

<style scoped>
.horizontal {
  display: flex;
}
</style>