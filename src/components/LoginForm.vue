<template>
  <div class="mt-40">
    <h1 class="font-medium text-3xl">
      Welcome back, it is good to see you again!
    </h1>
    <form>
      <input
        type="email"
        v-model="userEmail"
        placeholder="Email"
        class="placeholder:font-medium w-full h-14 mt-7 border border-input-border rounded-lg pl-4"
        :class="[
          formError
            ? 'focus:outline-none placeholder-red-800 border-red-500 border-2 border-solid'
            : 'placeholder:text-gray border-input-border',
        ]"
      />
      <p v-if="formError" class="text-red-500 mt-1">{{ emailErrorMsg }}</p>
      <input
        type="password"
        v-model="userPassword"
        placeholder="Password"
        class="placeholder:font-medium w-full h-14 mt-3 border border-input-border rounded-lg pl-4"
        :class="[
          formError
            ? 'focus:outline-none placeholder-red-800 border-red-500 border-2 border-solid'
            : 'placeholder:text-gray border-input-border',
        ]"
      />
      <p v-if="formError" class="text-red-500 mt-1">
        Incorrect Password: <b>{{ userPassword }}</b>
      </p>
      <div class="text-right">
        <p class="text-dark-gray font-medium mt-2">Forgot Password?</p>
      </div>
      <div class="flex flex-row justify-center items-center">
        <button
          @click.prevent="validateForm"
          class="mt-10 h-14 w-80 bg-dark-gray font-medium text-white rounded-lg"
        >
          Login
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
      userPassword: "",
      formError: false,
      emailErrorMsg: "",
      passwordErrorMsg: "",
      validEmail: true,
    };
  },
  methods: {
    validateForm() {
      if (this.userEmail.length === 0) {
        this.formError = true;
        this.emailErrorMsg = "This field is required"
      }
      if (this.userPassword.length === 0) {
        this.formError = true;
      } else {
        this.submitForm();
      }
    },

    toggleErrors() {
      this.formError = !this.formError;
    },
    submitForm() {
      this.formError = false;
      console.log(this.userEmail);
      console.log(this.userPassword);
    },
  },

  name: "LoginForm",
};
</script>
