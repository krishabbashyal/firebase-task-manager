<template>
  <div>
    <div class="mt-28">
      <div class="fixed bottom-4 mx-4 right-0 left-0 z-50">
        <div
          class="w-full box-border h-16 rounded-3xl bg-white border-2 border-create-separation"
        >
          <div class="grid h-full grid-cols-3 px-6">
            <button
              @click="dashboardClicked"
              type="button"
              class="inline-flex flex-col items-center justify-center"
            >
              <img src="../assets/images/homeIcon.svg" alt="" />
            </button>
            <button
              @click="createClicked"
              type="button"
              class="inline-flex flex-col items-center justify-center"
            >
              <p
                class="flex items-center justify-center w-16 h-16 text-4xl text-white bg-accent-dark rounded-full -mt-5"
              >
                <span class="-mt-0.5">+</span>
              </p>
            </button>
            <button
              @click="profileClicked"
              type="button"
              class="inline-flex flex-col items-center justify-center"
            >
              <img src="../assets/images/profileIcon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/main.js";
export default {
  data() {
    return {
      modalOpen: false
    }

  },
  methods: {
    dashboardClicked() {
      router.push({ name: "Dashboard" });
    },
    createClicked() {
      this.modalOpen = !this.modalOpen
      console.log(this.modalOpen)
    },
    profileClicked() {
      router.push({ name: "Profile" });
    },
  },
  name: "BottomNavagation",
};
</script>
