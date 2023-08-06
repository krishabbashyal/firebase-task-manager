<template>
  <div class="mt-40">
    <h1 class="font-medium text-3xl">
      Hello there, register an account to get started!
    </h1>
    <form>
      <input
        type="email"
        v-model="userEmail"
        placeholder="Email"
        class="placeholder:text-gray placeholder:font-medium w-full h-14 mt-7 mb-2 border border-input-border rounded-lg pl-4"
      />
      Current Email: <b>{{ userEmail }}</b>
      <input
        type="text"
        v-model="userFirstName"
        placeholder="First Name"
        class="placeholder:text-gray placeholder:font-medium w-full h-14 mb-2 border border-input-border rounded-lg pl-4"
      />
      Current First Name: <b>{{ userFirstName }}</b>
      <input
        type="password"
        v-model="userPassword"
        placeholder="Password"
        class="placeholder:text-gray placeholder:font-medium w-full h-14 mb-2 border border-input-border rounded-lg pl-4"
      />
      Current Password: <b>{{ userPassword }}</b>
      <input
        type="password"
        v-model="userConfirmPassword"
        placeholder="Confirm Password"
        class="placeholder:text-gray placeholder:font-medium w-full h-14 mb-2 border border-input-border rounded-lg pl-4"
      />
      Confirm Passowrd: <b>{{ userConfirmPassword }}</b>
      <div class="flex flex-row justify-center items-center">
        <button
          @click.prevent="submitForm"
          class="mt-10 h-14 w-80 bg-dark-gray font-medium text-white rounded-lg"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: "",
      userFirstName: "",
      userPassword: "",
      userConfirmPassword: "",

    }
  },
    methods: {
    submitForm() {
      console.log(this.userEmail)
      console.log(this.userFirstName)
      console.log(this.userPassword)
    }
  },
  name: "RegisterForm"
}
</script>
