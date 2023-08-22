<template>
  <div class=" xs:mt-20 sm:mt-36">
    <h1 class="font-medium text-3xl">
      Welcome back, it is good to see you again!
    </h1>
    <div v-if="showAlert">
      <alert-display :alertText="alertMsg"/>
    </div>
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
    <div class="text-center">
      <p class="mt-8 text-sm text-accent-neutral font-semibold">Or Login With</p>
      <button class="w-48 h-14 mt-3 bg-white border border-create-separation rounded-lg ">
        <img class="mx-auto" src="../assets/images/googleIcon.svg" alt="">
      </button>
      <div class="font-semibold fixed bottom-10 right-0 left-0 z-50 text-center">
        <p>Don't have an account? <button @click="registerRedirect" class="text-accent-light">Register Now</button></p>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/main.js';
import { supabase } from "../lib/supabaseClient.js";
import AlertDisplay from './AlertDisplay.vue';


export default {
  components: {
    AlertDisplay
  },  
  data() {
    return {
      userEmail: "",
      userPassword: "",

      emailErrorMsg: "",
      emailError: false,

      passwordErrorMsg: "",
      passwordError: false,

      validEmail: true,

      showAlert: false,
      alertMsg: "",

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
        this.showAlert = true
        this.alertMsg = error.message
      }
    },

    registerRedirect(){
      router.push({ name: "Register" })
    }
  },

  name: "LoginForm",
};
</script>
