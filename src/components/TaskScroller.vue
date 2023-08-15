<template>
  <div class="container space-y-2 scroll-x-auto">
      <task-card/>
      <task-card/>
      <task-card/>
      <task-card/>
      <task-card/>
      <task-card class="mb-56"/>
    </div>
</template>

<script>
import TaskCard from './TaskCard.vue';




export default {


  components: {
    TaskCard
  },
  name: "TaskScroller",
};
</script>

<style scoped>
.container {
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.container::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
</style>
