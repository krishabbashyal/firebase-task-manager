<template>
  <!-- mx-4 is currently being used as a way to set the deadspace for the components, this will be implemented globally at some point -->
  <div class="h-56 w-64 bg-white rounded-3xl mx-4 mt-40">
    <div class="mx-5">
      <div>
        <span class="font-semibold text-xs inline-block py-1 px-2 rounded-full text-emerald-600 bg-emerald-200 mr-1 mt-7">Development</span>
      </div>
      <div class="flex flex-row items-center">
        <div class="flex flex-row items-end mt-3">
          <p class="font-medium mr-2 text-2xl">JourneyJot</p>
          <p class="text-sm leading-7 opacity-30">v1.0</p>
        </div>
      </div>
      <div>
        <div class="mt-3">
          <ul>
              <!-- This needs to be turned into another componment as soon as possible, this is awful to look at -->
            <li class="flex mt-1">
              <div class="p-0.5 bg-light-gray rounded-3xl text-sm w-11 text-center">
                <p>24</p>
              </div>
              <div class="p-0.5 ml-2 text-sm">
                <p class="opacity-50">Pending</p>
              </div>
            </li>
            <li class="flex mt-1">
              <div class="p-0.5 bg-light-gray rounded-3xl text-sm w-11 text-center">
                <p>2</p>
              </div>
              <div class="p-0.5 ml-2 text-sm">
                <p class="opacity-50">In Progress</p>
              </div>
            </li>
            <li class="flex mt-1">
              <div class="p-0.5 bg-light-gray rounded-3xl text-sm w-11 text-center">
                <p>143</p>
              </div>
              <div class="p-0.5 ml-2 text-sm">
                <p class="opacity-50">Completed</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
