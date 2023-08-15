<template>
  <div>
    <profile-card/>
    <bottom-navagation/>
  </div>
</template>

<script>
import BottomNavagation from '@/components/BottomNavagation.vue';
import ProfileCard from "../components/ProfileCard.vue";

export default {
  components: {
    ProfileCard,
    BottomNavagation
  },
  name: "ProfilePage",
};
</script>
