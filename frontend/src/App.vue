<template>
  <div class = "mt-40 mx-4">
    <h1 class = 'font-semibold text-3xl'>Welcome back, it is good to see you again!</h1>
    <form>
      <input type="email" placeholder="Email" class = "w-full h-14 mt-7 mb-4 border rounded-lg pl-4">
      <input type="password" placeholder="Password" class = "w-full h-14 mb-2 border rounded-lg pl-4">
      <p>Forgot Password?</p>
      <button>Login</button>
    </form>
    <form>
      <button>Google</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

