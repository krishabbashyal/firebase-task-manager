<template>
  <div class="mt-40">
    <h1 class="font-medium text-3xl">
      Hello there, register an account to get started!
    </h1>
    <form>
      <!-- input field for email -->
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

      <!-- input field for display name -->
      <input
        type="text"
        v-model="userDisplayName"
        placeholder="Display Name"
        class="placeholder:font-medium w-full h-14 mt-3 border border-input-border rounded-lg pl-4"
        :class="[
          displayNameError
            ? 'focus:outline-none placeholder-red-800 border-red-500 border-2 border-solid'
            : 'placeholder:text-gray border-input-border',
        ]"
      />
      <p v-if="displayNameError" class="text-red-500 mt-1">
        {{ displayNameErrorMsg }}
      </p>

      <!-- input field for password -->
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

      <!-- input field for confirm password -->
      <input
        type="password"
        v-model="userConfirmPassword"
        placeholder="Confirm Password"
        class="placeholder:font-medium w-full h-14 mt-3 border border-input-border rounded-lg pl-4"
        :class="[
          confirmPasswordError
            ? 'focus:outline-none placeholder-red-800 border-red-500 border-2 border-solid'
            : 'placeholder:text-gray border-input-border',
        ]"
      />
      <p v-if="confirmPasswordError" class="text-red-500 mt-1">
        {{ confirmPasswordErrorMsg }}
      </p>

      <div class="flex flex-row justify-center items-center">
        <button
          @click.prevent="validateForm"
          class="mt-10 h-14 w-80 bg-dark-gray font-medium text-white rounded-lg"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { supabase } from "../lib/supabaseClient.js";

export default {
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
      if (this.userEmail.length === 0) {
        this.emailErrorMsg = "This field is required";
        this.emailError = true;
      }

      if (this.userDisplayName.length === 0) {
        this.displayNameErrorMsg = "This field is required";
        this.displayNameError = true;
      } else {
        this.displayNameError = false;
      }

      if (this.userPassword.length === 0) {
        this.passwordErrorMsg = "This field is required";
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }

      if (this.userConfirmPassword.length === 0) {
        this.confirmPasswordErrorMsg = "This field is required";
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

      console.log("Data: " + JSON.stringify(data));
      console.log("Error: " + error);
    },
  },

  name: "RegisterForm",
};
</script>
