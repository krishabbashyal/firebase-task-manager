<template class="">
  <div class="leave-this-class mx-4">
    <div>
      <p>Hey, USER!</p>
      <p>Your Recent Projects</p>
      <p>14 tasks are assigned to you.</p>
    </div>
    <card-scroller/>
  </div>
</template>

<script>
import CardScroller from './components/CardScroller.vue';

export default {
  components: {
    CardScroller,
  },
  name: "App",
};
</script>

<style>

</style>
