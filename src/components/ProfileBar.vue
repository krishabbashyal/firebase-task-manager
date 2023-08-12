<template>
  <div>
    <div class="mt-20 flex justify-between">
      <div>
        <p class="font-medium text-xl">Hey, {{ userDisplayName }} 👋</p>
        <p class="-mt-1"> Let’s have a productive day.</p>
      </div>
      <div>
        <img class="w-[3.125rem] h-[3.125rem] rounded-full" src="../assets/images/defaultProfilePicture.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userDisplayName: "Xander Evergreen",
    }
    
  },
  name: "ProfileBar",
};
</script>
