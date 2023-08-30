<template>
  <div class="space-y-2 w-full">
    <task-card />
    <task-card />
    <task-card />
    <task-card />
    <task-card />
  </div>
</template>

<script>
import TaskCard from "./TaskCard.vue";

export default {
  components: {
    TaskCard,
  },
  name: "TaskScroller",
};
</script>
