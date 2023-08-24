<template>
  <div class="bg-white w-full py-3 pb-5 rounded-3xl flex-shrink-0">
    <div class="px-4">
      <div class="flex flex-row justify-between items-center">
        <p class="text-[#787486] text-sm">JJ-123</p>
        <p class="text-lg">...</p>
      </div>
      <p class="font-medium text-lg mt-1">Fix Mobile Scaling Issues</p>
      <p class="leading-5 pt-1 line-clamp-3 text-[#787486] text-sm">
        There is an issue with the login and register pages where the form
        exceed the length of the container.
      </p>
      <div class="flex flex-row justify-between mt-3.5">
        <div class="flex flex-row space-x-2 text-sm">
          <p
            class="bg-[#DFA874] bg-opacity-25 rounded-md text-[#DFA874] px-2 py-0.5">
            Low
          </p>
          <p
            class="bg-[#5030E5] bg-opacity-25 rounded-md text-[#5030E5] px-2 py-0.5">
            Ready To Complete
        </p>
        </div>
        <div class="flex flex-row space-x-2 text-sm">
          <p class="py-0.5 text-[#787486]">12 Comments</p>
          <p class="py-0.5 text-[#787486]">2 Files</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
};
</script>
