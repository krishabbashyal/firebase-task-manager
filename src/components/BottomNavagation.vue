<template>
  <div>
    <div class="fixed bottom-4 mx-4 right-0 left-0 z-50">
      <div v-if="modalOpen">
        <div class="flex gap-2 text-white mb-1.5 h-[56px] text-center font-medium">
          <button class="bg-accent-light w-full rounded-2xl">Create new project</button>
          <button class="bg-accent-light w-full rounded-2xl">Create new task</button>
        </div>
      </div>
      <div
        class="grid grid-cols-3 px-6 w-full box-border h-[60px] rounded-3xl bg-white border-2 border-create-separation">
        <button
          @click="dashboardClicked"
          type="button"
          class="inline-flex flex-col items-center justify-center">
          <img src="../assets/images/homeIcon.svg" alt="" />
        </button>
        <button
          @click="createClicked"
          type="button"
          class="inline-flex flex-col items-center justify-center">
          <div
            class="flex z-50 items-center justify-center w-16 h-16 text-4xl text-white bg-accent-dark rounded-full -mt-10">
            <span
              :class="[modalOpen ? 'text-error-border rotate-45 -mr-0.5' : '']"
              class="-mt-1"
              >+</span
            >
          </div>
        </button>
        <button
          @click="profileClicked"
          type="button"
          class="inline-flex flex-col items-center justify-center">
          <img src="../assets/images/profileIcon.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/main.js";
export default {
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    dashboardClicked() {
      router.push({ name: "Dashboard" });
    },
    createClicked() {
      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen);
    },
    profileClicked() {
      router.push({ name: "Profile" });
    },
  },
  name: "BottomNavagation",
};
</script>
