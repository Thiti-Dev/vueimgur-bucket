<template>
  <div class="ui inverted segment">
    <div class="ui inverted secondary pointing menu">
      <a class="active item">Vueimgur-Bucket</a>
      <div class="right menu">
        <a href="#" class="item" @click="login">Sign In</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  methods: mapActions(["login"])
};
</script>