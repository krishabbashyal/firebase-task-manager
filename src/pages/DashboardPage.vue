<template>
    <div>
      <profile-bar/>
      <section-header sectionHeader="Your Categories"/>
      <card-scroller/>
      <section-header sectionHeader="Your Tasks"/>
      <task-scroller class="mb-36"/>
      <bottom-navagation/>
    </div>
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

