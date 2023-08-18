<template>
  <div class="text-center">
    <div
      class="text-sm w-full inline-block py-3 rounded-lg text-error-text bg-error-banner mt-5 -mb-3"
    >
      {{ alertText }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alertText: {
      type: String,
      required: true,
    },
  },
  name: "AlertDisplay",
};
</script>
