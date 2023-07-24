<template>
  <!-- mx-4 is currently being used as a way to set the deadspace for the components, this will be implemented globally at some point -->
  <div class="h-56 w-64 bg-indigo-500 rounded-3xl mx-4 mt-40">
    <div class="mx-5">
      <div class="flex flex-row items-center">
        <p class="mt-4 mr-3 text-2xl">JourneyJot</p>
        <p class="mt-6 text-sm">v1.0</p>
        <!-- this mt-6 needs to be replaced with a better solution, this approach only works if there are no text that is bwlow the baseline of the fonts -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
