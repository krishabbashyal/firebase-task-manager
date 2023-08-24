<template>
  <div class="mx-4">
    <login-form />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
  name: "LoginPage",
};
</script>
