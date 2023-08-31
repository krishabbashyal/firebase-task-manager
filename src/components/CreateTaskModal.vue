<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white w-[350px] pb-6 text-center rounded-3xl px-5 py-3">
      <div class="flex flex-row w-full justify-end">
        <button @click="closeFormModal" class="hover:bg-create-separation">
          <img class="rotate-45 w-6 p-1" src="../assets/images/crossIcon.svg" alt="" />
        </button>
      </div>
      <p class="pb-5 text-xl font-medium">Create A New Task</p>
      <div class="flex flex-col space-y-3.5">
        <input type="text" placeholder="Task Title" class="border border-create-separation placeholder:font-medium w-full h-12 rounded-lg pl-4" />
        <input type="text" placeholder="Project" class="border border-create-separation placeholder:font-medium w-full h-12 rounded-lg pl-4" />
        <input type="text" placeholder="Description (Optional)" class="border border-create-separation placeholder:font-medium w-full h-24 pb-14 rounded-lg pl-4" />
        <input type="text" placeholder="Priority (Optional)" class="border border-create-separation placeholder:font-medium w-full h-12 rounded-lg pl-4" />
        <div class="flex text-form-placeholder pb-5">
          <p>Add to</p>
          <span class="font-medium mx-2.5 px-1 border border-create-separation rounded-lg">Ready To Complete</span> section
        </div>
      </div>
      <div>
        <button @click.prevent="validateForm" class="mt-5 h-12 w-full bg-accent-dark font-medium text-white rounded-lg">Create</button>
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
  name: "CreateModal",
};
</script>
