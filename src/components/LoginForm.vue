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
          emailError
            ? 'focus:outline-none placeholder-red-800 border-red-500 border-2 border-solid'
            : 'placeholder:text-gray border-input-border',
        ]"
      />
      <p v-if="emailError" class="text-red-500 mt-1">{{ emailErrorMsg }}</p>
      <input
        type="password"
        v-model="userPassword"
        placeholder="Password"
        class="placeholder:font-medium w-full h-14 mt-3 border border-input-border rounded-lg pl-4"
        :class="[
          passwordError
            ? 'focus:outline-none placeholder-red-800 border-red-500 border-2 border-solid'
            : 'placeholder:text-gray border-input-border',
        ]"
      />
      <p v-if="passwordError" class="text-red-500 mt-1">
        {{ passwordErrorMsg }}
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
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: "",
      userPassword: "",

      emailErrorMsg: "",
      emailError: false,

      passwordErrorMsg: "",
      passwordError: false,

      validEmail: true,
    };
  },
  methods: {
    validateForm() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.validEmail = emailPattern.test(this.userEmail);
      console.log("Email valid: " + this.validEmail);

      if (this.validEmail) {
        this.emailError = false;
      } else {
        this.emailErrorMsg = "Please enter a valid email address";
        this.emailError = true;
      }
      if (this.userEmail.length === 0) {
        this.emailErrorMsg = "This field is required";
        this.emailError = true;
      }

      if (this.userPassword.length === 0) {
        this.passwordErrorMsg = "This field is required";
        this.passwordError = true;
      } else {
        this.passwordError = false
        this.submitForm();
      }
    },

    submitForm() {
      console.log(this.userEmail);
      console.log(this.userPassword);
      alert("Nice, you have logged into your account!")
    },
  },

  name: "LoginForm",
};
</script>
