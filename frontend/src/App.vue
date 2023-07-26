<template class="">
  <div class="leave-this-class mx-4">
    <section-header class="mt-16"/>
    <card-scroller class="mt-2"/>
  </div>
</template>

<script>
import CardScroller from './components/CardScroller.vue';
import SectionHeader from './components/SectionHeader.vue';


export default {
  components: {
    CardScroller,
    SectionHeader,
  },
  name: "App",
};
</script>

<style>

</style>
