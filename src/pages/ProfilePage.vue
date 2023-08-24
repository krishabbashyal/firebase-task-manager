<template>
  <div class="mx-4">
    <profile-card />
  </div>
  <bottom-navagation />
</template>

<script>
import BottomNavagation from "@/components/BottomNavagation.vue";
import ProfileCard from "../components/ProfileCard.vue";

export default {
  components: {
    ProfileCard,
    BottomNavagation,
  },
  name: "ProfilePage",
};
</script>
