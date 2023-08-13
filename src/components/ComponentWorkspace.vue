<template>
    <div>
      <profile-bar/>
      <section-header sectionHeader="Your Categories"/>
      <card-scroller/>

    </div>
</template>

<script>
import CardScroller from './CardScroller.vue';
import ProfileBar from './ProfileBar.vue';
import SectionHeader from './SectionHeader.vue';


export default {
  components: {
    ProfileBar,
    SectionHeader,
    CardScroller
  },
  name: "ComponentWorkspace",
};
</script>

