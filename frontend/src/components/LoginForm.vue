<template>
  <!-- mx-4 is currently being used as a way to set the deadspace for the components, this will be implemented globally at some point -->
  <div class="mt-40 mx-4">
    <h1 class="font-medium text-3xl">
      Welcome back, it is good to see you again!
    </h1>
    <form>
      <input
        type="email"
        placeholder="Email"
        class="placeholder:text-gray placeholder:font-medium w-full h-14 mt-7 mb-2 border rounded-lg pl-4"
      />
      <input
        type="password"
        placeholder="Password"
        class="placeholder:text-gray placeholder:font-medium w-full h-14 mb-2 border rounded-lg pl-4"
      />
      <div class="text-right">
        <p class="text-dark-gray font-medium mt-2">Forgot Password?</p>
      </div>
      <div class="flex flex-row justify-center items-center">
        <button
          class="mt-10 h-14 w-80 bg-dark-gray font-medium text-white rounded-lg"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
