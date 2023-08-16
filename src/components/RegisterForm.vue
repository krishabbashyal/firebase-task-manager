<template>
  <div class="mt-14">
    <h1 class="font-medium text-3xl">
      Hello there, register an account to get started!
    </h1>
    <alert-display/>
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
            : 'placeholder:text-gray border-create-separation',
        ]"
      />
      <p v-if="emailError" class="text-error-text mt-1">
        {{ emailErrorMsg }}
      </p>

      <!-- input field for display name -->
      <input
        type="text"
        v-model="userDisplayName"
        placeholder="Display Name"
        class="placeholder:font-medium w-full h-14 mt-3 border border-create-separation rounded-lg pl-4"
        :class="[
          displayNameError
            ? 'focus:outline-none placeholder-error-text border-error-border border-2 border-solid'
            : 'placeholder:text-gray border-create-separation',
        ]"
      />
      <p v-if="displayNameError" class="text-error-text mt-1">
        {{ displayNameErrorMsg }}
      </p>

      <!-- input field for password -->
      <input
        type="password"
        v-model="userPassword"
        placeholder="Password"
        class="placeholder:font-medium w-full h-14 mt-3 border border-create-separation rounded-lg pl-4"
        :class="[
          passwordError
            ? 'focus:outline-none placeholder-error-text border-error-border border-2 border-solid'
            : 'placeholder:text-gray border-create-separation',
        ]"
      />
      <p v-if="passwordError" class="text-error-text mt-1">
        {{ passwordErrorMsg }}
      </p>

      <!-- input field for confirm password -->
      <input
        type="password"
        v-model="userConfirmPassword"
        placeholder="Confirm Password"
        class="placeholder:font-medium w-full h-14 mt-3 border border-create-separation rounded-lg pl-4"
        :class="[
          confirmPasswordError
            ? 'focus:outline-none placeholder-error-text border-error-border border-2 border-solid'
            : 'placeholder:text-gray border-create-separation',
        ]"
      />
      <p v-if="confirmPasswordError" class="text-error-text mt-1">
        {{ confirmPasswordErrorMsg }}
      </p>

      <div class="flex flex-row justify-center items-center">
        <button
          @click.prevent="validateForm"
          class="mt-10 h-14 w-80 bg-accent-dark font-medium text-white rounded-lg"
        >
          Register
        </button>
      </div>
    </form>
    <div class="text-center flex-grow">
      <p class="mt-8 text-sm text-accent-neutral font-semibold">Or Register With</p>
      <button class="w-48 h-14 mt-3 bg-white border border-create-separation rounded-lg ">
        <img class="mx-auto" src="../assets/images/googleIcon.svg" alt="">
      </button>
      <div class="font-semibold fixed bottom-8 right-0 left-0 z-50">
        <p>Already have an account? <button @click="loginRedirect" class="text-accent-light">Login Now</button></p>
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
      userDisplayName: "",
      userLastName: "",
      userPassword: "",
      userConfirmPassword: "",

      emailErrorMsg: "",
      emailError: false,

      displayNameErrorMsg: "",
      displayNameError: false,

      lastNameErrorMsg: "",
      lastNameError: false,

      passwordErrorMsg: "",
      passwordError: false,

      confirmPasswordErrorMsg: "",
      confirmPasswordError: false,

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

      if (this.userDisplayName.length === 0) {
        this.displayNameErrorMsg = "A display name is required";
        this.displayNameError = true;
      } else {
        this.displayNameError = false;
      }

      if (this.userPassword.length < 6) {
        this.passwordErrorMsg = "Password should be at least 6 characters";
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }

      if (this.userConfirmPassword.length === 0) {
        this.confirmPasswordErrorMsg = "Confirm your password";
        this.confirmPasswordError = true;
      } else {
        if (this.checkPasswords()) {
          this.confirmPasswordError = false;
        } else {
          this.confirmPasswordErrorMsg = "Passwords do not match";
          this.confirmPasswordError = true;
        }
      }

      if (
        !this.emailError &&
        !this.displayNameError &&
        !this.passwordError &&
        !this.confirmPasswordError
      ) {
        this.submitForm();
      }
    },

    checkPasswords() {
      if (this.userPassword === this.userConfirmPassword) {
        return true;
      } else {
        return false;
      }
    },

    async submitForm() {
      const { data, error } = await supabase.auth.signUp({
        email: this.userEmail,
        password: this.userPassword,
        options: {
          data: {
            display_name: this.userDisplayName,
          },
        },
      });

      if (!error) {
        console.log(data);
        router.push({ name: "Dashboard" });
      } else {
        console.log(error);
      }
    },

    loginRedirect(){
      router.push({ name: "Login" })
    }
  },

  name: "RegisterForm",
};
</script>
