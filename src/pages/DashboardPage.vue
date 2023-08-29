<template>
    <div class="mx-4">
      <profile-bar/>
      <section-header sectionHeader="Your Recent Projects"/>
      <card-scroller/>
      <section-header sectionHeader="Your Assigned Tasks"/>
      <task-scroller class="mb-28"/>
    </div>
    <bottom-navagation/>
</template>

<script>
import BottomNavagation from '../components/BottomNavagation.vue';
import CardScroller from '../components/CardScroller.vue';
import ProfileBar from '../components/ProfileBar.vue';
import SectionHeader from '../components/SectionHeader.vue';
import TaskScroller from '../components/TaskScroller.vue';


export default {
  components: {
    ProfileBar,
    SectionHeader,
    CardScroller,
    TaskScroller,
    BottomNavagation
  },
  name: "DashboardPage",
};
</script>

