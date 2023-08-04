<template>
  <div>
    <section-header class="mt-16 mb-1"/>
    <card-scroller/>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import CardScroller from '@/components/CardScroller.vue';

export default {
  components: {
    SectionHeader,
    CardScroller
  },
  name: "DashboardPage",
};
</script>
