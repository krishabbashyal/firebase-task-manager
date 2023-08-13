<template>
    <div>
      <profile-bar/>
      <section-header sectionHeader="Your Categories"/>
      <card-scroller/>
      <section-header sectionHeader="Your Tasks"/>
      <task-scroller/>

    </div>
</template>

<script>
import CardScroller from './CardScroller.vue';
import ProfileBar from './ProfileBar.vue';
import SectionHeader from './SectionHeader.vue';
import TaskScroller from './TaskScroller.vue';


export default {
  components: {
    ProfileBar,
    SectionHeader,
    CardScroller,
    TaskScroller
  },
  name: "ComponentWorkspace",
};
</script>

