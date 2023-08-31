<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white w-[350px] pb-6 text-center rounded-3xl px-5 py-3">
      <div class="flex flex-row w-full justify-end">
        <button @click="closeFormModal" class="hover:bg-create-separation">
          <img class="rotate-45 w-6 p-1" src="../assets/images/crossIcon.svg" alt="" />
        </button>
      </div>
      <p class="pb-5 text-xl font-medium">Create A New Project</p>
      <div class="flex flex-col space-y-3.5">
        <input type="text" placeholder="Project Name" class="border border-create-separation placeholder:font-medium w-full h-12 rounded-lg pl-4" />
        <div class="flex space-x-2">
          <input v-model="taskNumbering" type="checkbox" class="w-4" />
          <label class="font-medium text-form-placeholder pl-1">Task Numbering</label>
        </div>
        <div v-if="taskNumbering">
          <input type="text" placeholder="Project Key (Optional)" class="border border-create-separation placeholder:font-medium w-full h-12 rounded-lg pl-4" />
        </div>
        <input type="text" placeholder="Description (Optional)" class="border border-create-separation placeholder:font-medium w-full h-24 pb-14 rounded-lg pl-4" />
        <div class="flex justify-between space-x-2">
          <p class="font-medium text-form-placeholder pl-1">Accent Color (Optional)</p>
          <p class="font-medium text-form-placeholder pl-1 border px-2">Refresh</p>
        </div>
        <div class="flex space-x-3 justify-center pt-1">
          <img src="../assets/images/ellipse.svg" alt="" class="w-9" />
          <img src="../assets/images/ellipse.svg" alt="" class="w-9" />
          <img src="../assets/images/ellipse.svg" alt="" class="w-9" />
          <img src="../assets/images/ellipse.svg" alt="" class="w-9" />
          <img src="../assets/images/ellipse.svg" alt="" class="w-9" />
          <img src="../assets/images/ellipse.svg" alt="" class="w-9" />
        </div>
        <div class="">
          <button @click.prevent="validateForm" class="mt-5 h-12 w-full bg-accent-dark font-medium text-white rounded-lg">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskNumbering: false,
    };
  },
  methods: {
    closeFormModal() {
      this.$emit("closeModal", false);
    },
  },
  name: "CreateProjectModal",
};
</script>
