<template>
  <div class="ui inverted segment">
    <div class="ui inverted secondary pointing menu">
      <a class="active item">Vueimgur-Bucket</a>
      <div class="right menu">
        <div v-if="isLoggedIn">
          <a href="#" class="item">Sign Out</a>
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
  methods: mapActions(["login"])
};
</script>