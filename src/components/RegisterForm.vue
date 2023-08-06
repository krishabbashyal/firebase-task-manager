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
                class="placeholder:font-medium w-full h-14 mt-7 border border-input-border rounded-lg pl-4"
        :class="[formError ? 'focus:outline-none placeholder-red-800 border-red-500 border-2 border-solid' : 'placeholder:text-gray border-input-border']"
      />
      <p v-if="formError" class="text-red-500 mt-1">Please enter an email address: <b>{{ userEmail }}</b></p>

      <input
        type="text"
        v-model="userFirstName"
        placeholder="First Name"
        class="placeholder:font-medium w-full h-14 mt-3 border border-input-border rounded-lg pl-4"
        :class="[formError ? 'focus:outline-none placeholder-red-800 border-red-500 border-2 border-solid' : 'placeholder:text-gray border-input-border']"
      />
      <p v-if="formError" class="text-red-500 mt-1">Please enter your first name: <b>{{ userFirstName }}</b></p>
      <input
        type="password"
        v-model="userPassword"
        placeholder="Password"
        class="placeholder:font-medium w-full h-14 mt-3 border border-input-border rounded-lg pl-4"
        :class="[formError ? 'focus:outline-none placeholder-red-800 border-red-500 border-2 border-solid' : 'placeholder:text-gray border-input-border']"
      />
      <p v-if="formError" class="text-red-500 mt-1">Password not strong: <b>{{ userPassword }}</b></p>
      <input
        type="password"
        v-model="userConfirmPassword"
        placeholder="Confirm Password"
        class="placeholder:font-medium w-full h-14 mt-3 border border-input-border rounded-lg pl-4"
        :class="[formError ? 'focus:outline-none placeholder-red-800 border-red-500 border-2 border-solid' : 'placeholder:text-gray border-input-border']"
      />
      <p v-if="formError" class="text-red-500 mt-1">Passwords do not match: <b>{{ userConfirmPassword }}</b></p>
      <div class="flex flex-row justify-center items-center">
        <button
          @click.prevent="submitForm"
          class="mt-10 h-14 w-80 bg-dark-gray font-medium text-white rounded-lg"
        >
          Register
        </button>
      </div>
            <button
        @click.prevent="toggleErrors"
        class="mt-10 h-14 w-80 bg-red-500 font-medium text-white rounded-lg"
      >
        Show Errors: {{ formError }}
      </button>
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
      formError: true

    }
  },
    methods: {
        toggleErrors() {
      this.formError = !this.formError;
      console.log(this.formError);
    },
    submitForm() {
      console.log(this.userEmail)
      console.log(this.userFirstName)
      console.log(this.userPassword)
    }
  },
  name: "RegisterForm"
}
</script>
