<template>
  <div>
    <img v-for="(image,index) in allImage" :key="index" :src="image.link" width="150" height="150" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",
  computed: mapGetters(["allImage"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
};
</script>