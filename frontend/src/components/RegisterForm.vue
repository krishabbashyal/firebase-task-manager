<template>
  <div class = "mt-40 mx-4">
    <h1 class = 'font-medium text-3xl'>Hello there, register an account to get started!</h1>
    <form>
      <input type="email" placeholder="Email" class = "placeholder:text-light-gray placeholder:font-medium w-full h-14 mt-7 mb-2 border rounded-lg pl-4">
      <input type="text" placeholder="First Name" class = "placeholder:text-light-gray placeholder:font-medium w-full h-14 mb-2 border rounded-lg pl-4">
      <input type="password" placeholder="Password" class = "placeholder:text-light-gray placeholder:font-medium w-full h-14 mb-2 border rounded-lg pl-4">
      <input type="password" placeholder="Confirm Password" class = "placeholder:text-light-gray placeholder:font-medium w-full h-14 mb-2 border rounded-lg pl-4">
      <div class="flex flex-row justify-center items-center">
        <button class="mt-10 h-14 w-80 bg-dark-gray font-medium text-white  rounded-lg">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

