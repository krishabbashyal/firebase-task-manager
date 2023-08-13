<template>
    <div class="flex container overflow-x-auto space-x-3">
      <project-category-card/>
      <project-category-card/>
      <project-category-card/>

    </div>
</template>s

<script>

import ProjectCategoryCard from "../components/ProjectCategoryCard.vue"



export default {


  components: {
    ProjectCategoryCard
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
