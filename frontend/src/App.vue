<template class="">
  <div class="leave-this-class">
    <div class="flex overflow-x-auto">
      <project-card/>
      <project-card/>
      <project-card/>
      <project-card/>
    </div>
  </div>
</template>

<script>
import ProjectCard from './components/ProjectCard.vue'



export default {
  components: {
    ProjectCard
  },
  name: "App",
}
</script>

<style>

</style>