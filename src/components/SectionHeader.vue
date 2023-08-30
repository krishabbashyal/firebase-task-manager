<template>
  <div>
    <div class="flex flex-row justify-between items-center mt-7 mb-3.5">
      <p class="text-xl font-medium">{{ sectionHeader }}</p>
      <p class="text-sm text-accent-light font-medium"><a href="">See All</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionHeader: {
      type: String,
      required: true,
    },
  },
  name: "SectionHeader",
};
</script>
