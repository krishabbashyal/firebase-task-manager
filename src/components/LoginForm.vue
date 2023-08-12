<template>
  <div class="mt-40">
    <h1 class="font-medium text-3xl">
      Welcome back, it is good to see you again!
    </h1>
    <form>
      <!-- input field for email -->
      <input
        type="email"
        v-model="userEmail"
        placeholder="Email"
        class="placeholder:font-medium w-full h-14 mt-7 border border-create-separation rounded-lg pl-4"
        :class="[
          emailError
            ? 'focus:outline-none placeholder-error-text border-error-border border-2 border-solid'
            : 'placeholder:form-placeholder border-create-separation',
        ]"
      />
      <p v-if="emailError" class= "mt-1 text-error-text">{{ emailErrorMsg }}</p>

      <!-- input field for password -->
      <input
        type="password"
        v-model="userPassword"
        placeholder="Password"
        class="placeholder:font-medium w-full h-14 mt-3 border border-create-separation rounded-lg pl-4"
        :class="[
          passwordError
            ? 'focus:outline-none placeholder-error-text border-error-border border-2 border-solid'
            : 'placeholder:form-placeholder border-create-separation',
        ]"
      />
      <p v-if="passwordError" class="text-error-text mt-1">
        {{ passwordErrorMsg }}
      </p>

      <div class="text-right">
        <p class="text-accent-light font-medium mt-3">Forgot Password?</p>
      </div>
      <div class="flex flex-row justify-center items-center">
        <button
          @click.prevent="validateForm"
          class="mt-10 h-14 w-80 bg-accent-dark font-medium text-white rounded-lg"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import router from '@/main.js';
import { supabase } from "../lib/supabaseClient.js";


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

      if (this.validEmail) {
        this.emailError = false;
      } else {
        this.emailErrorMsg = "Please enter a valid email address";
        this.emailError = true;
      }

      if (this.userPassword.length < 6) {
        this.passwordErrorMsg = "Password should be at least 6 characters";
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }

      if (!this.passwordError && !this.emailError) {
        this.submitForm();
      }
    },

    async submitForm() {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: this.userEmail,
        password: this.userPassword,
      });

      if (!error) {
        console.log(data)
        router.push({ name: "Dashboard" });
      } else {
        console.log(error)
      }
    },
  },

  name: "LoginForm",
};
</script>
