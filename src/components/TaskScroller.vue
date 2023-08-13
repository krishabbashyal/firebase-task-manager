<template>
  <div class="container overflow-y-scroll space-y-2">
      <task-card/>
      <task-card/>
      <task-card/>
      <task-card/>
      <task-card/>
      <task-card/>
      <task-card/>
      <task-card/>
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
