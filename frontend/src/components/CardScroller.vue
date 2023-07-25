<template class="">
    <div class="flex overflow-x-auto container">
      <project-card />
      <project-card />
      <project-card />
      <project-card />
    </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
  name: "CardScroller",
};
</script>

<style scoped>
.container {
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.container::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
</style>
