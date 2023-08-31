<template>
  <div>
    <div v-if="displayCreateProject" class="fixed z-50 top-0 left-0 bg-black bg-opacity-30 w-full h-full overflow-y-hidden">
      <create-project-modal @displayModal="closeCreateNewModals" />
    </div>
    <div v-if="displayCreateTask" class="fixed z-50 top-0 left-0 bg-black bg-opacity-30 w-full h-full overflow-y-hidden">
      <create-task-modal @displayModal="closeCreateNewModals" />
    </div>
    <div class="fixed bottom-0 right-0 left-0">
      <Transition>
        <div v-if="createNewClicked">
          <div class="flex gap-2 text-white mb-1.5 h-[56px] text-center font-medium mx-4">
            <button
              @click="createProjectClicked"
              :class="[createNewClicked ? 'openCreateOptions bg-accent-light w-full shadow-md rounded-full border-t' : 'closeCreateOptions']"
              class="">
              Create New Project
            </button>
            <button @click="createTaskClicked" :class="[createNewClicked ? 'openCreateOptions bg-accent-light w-full shadow-md rounded-full' : 'closeCreateOptions']" class="">
              Create New Task
            </button>
          </div>
        </div>
      </Transition>
      <div class="grid grid-cols-3 px-6 w-full h-[60px] border-t border-create-separation shadow-inner bg-white">
        <button @click="dashboardClicked" type="button" class="inline-flex flex-col items-center justify-center">
          <img src="../assets/images/homeIcon.svg" alt="" />
        </button>
        <button @click="createClicked" type="button" class="inline-flex flex-col items-center justify-center">
          <div v-if="toggleAnimations" class="flex z-50 items-center justify-center w-16 h-16 text-4xl text-white bg-accent-dark rounded-full -mt-10">
            <svg
              :class="[createNewClicked ? 'rotate-animation' : 'unrotate-animation stroke-white']"
              width="26"
              height="26"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1L7 13" stroke-width="2" stroke-linecap="round" />
              <path d="M13 7L1 7" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
          <div v-else class="flex z-50 items-center justify-center w-16 h-16 text-4xl text-white bg-accent-dark rounded-full -mt-10">
            <svg class="stroke-white" width="26" height="26" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1L7 13" stroke-width="2" stroke-linecap="round" />
              <path d="M13 7L1 7" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
        </button>
        <button @click="profileClicked" type="button" class="inline-flex flex-col items-center justify-center">
          <img src="../assets/images/profileIcon.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/main.js";
import CreateProjectModal from "./CreateProjectModal.vue";
import CreateTaskModal from "./CreateTaskModal.vue";

export default {
  components: {
    CreateProjectModal,
    CreateTaskModal

    },
  data() {
    return {
      createNewClicked: false,
      displayCreateProject: false,
      displayCreateTask: false,
      toggleAnimations: false,
    };
  },
  methods: {
    dashboardClicked() {
      router.push({ name: "Dashboard" });
    },
    createProjectClicked() {
      this.createNewClicked = false;
      this.displayCreateProject = true;
      this.displayCreateTask = false;
    },

    createTaskClicked() {
      this.createNewClicked = false;
      this.displayCreateProject = false;
      this.displayCreateTask = true;
    },
    createClicked() {
      this.createNewClicked = !this.createNewClicked;
      this.toggleAnimations = true;
    },
    profileClicked() {
      router.push({ name: "Profile" });
    },
    closeCreateNewModals() {
      this.createNewClicked = false;
      this.displayCreateProject = false;
      this.displayCreateTask = false;
    },
  },
  name: "BottomNavagation",
};
</script>

<style scoped>
.v-leave-active {
  transition: opacity 250ms ease;
}

.v-leave-to {
  opacity: 0%;
}

.rotate-animation {
  animation: rotateIcon 250ms linear forwards;
}

@keyframes rotateIcon {
  0% {
    transform: rotate(0deg);
    stroke: white;
  }
  100% {
    transform: rotate(135deg);
    stroke: #ef4444;
  }
}

.unrotate-animation {
  animation: unrotateIcon 250ms linear backwards;
}

@keyframes unrotateIcon {
  0% {
    transform: rotate(135deg);
    stroke: #ef4444;
  }
  100% {
    transform: rotate(0deg);
    stroke: white;
  }
}

.openCreateOptions {
  animation: 250ms openCreateOptions;
  margin-top: 0%;
}

@keyframes openCreateOptions {
  from {
    margin-top: 10%;
    height: 8px;
    opacity: 0;
  }
  to {
    margin-top: 0%;
    height: 100%;
    opacity: 100%;
  }
}

.closeCreateOptions {
  animation: 250ms closeCreateOptions;
  margin-top: 0%;
}

@keyframes closeCreateOptions {
  from {
    margin-top: 0%;
    height: 100%;
    opacity: 100%;
  }
  to {
    margin-top: 10%;
    height: 8px;
    opacity: 0%;
  }
}
</style>
