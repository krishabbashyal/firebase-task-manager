<template>
<!-- This will likely need to be broken down into more components, lots of things here that can be reused down the line - Profile Icons, Progress Bar, etc. -->
  <div class="bg-white w-[14.063rem] h-[9.375rem] rounded-3xl flex-shrink-0">
    <div class="px-[17px]">
      <p class="pt-7 text-xl font-medium">JourneyJot</p>
      <p class="-mt-0.5">24 Tasks Remaining</p>
      <div class="flex -space-x-3 mt-1 -mb-2">
        <img
          class="w-7 h-7 border-2 border-white rounded-full"
          src="../assets/images/ellipse.svg"
        />
        <img
          class="w-7 h-7 border-2 border-white rounded-full "
          src="../assets/images/ellipse.svg"
        />
        <p class="flex items-center justify-center pr-0.5 w-7 h-7 text-sm text-white bg-accent-dark border-2 border-white rounded-full ">+3</p>
      </div>
      <p class="text-sm font-medium text-right">34%</p>
      <div
        class="w-full bg-zinc-200 rounded-full h-[0.313rem] "
      >
        <div
          class="bg-accent-dark h-[0.313rem] rounded-full"
          style="width: 34%"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCategoryCard",
};
</script>
