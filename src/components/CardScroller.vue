<template>
    <div class="flex overflow-x-auto container">

    </div>
</template>

<script>


export default {

  name: "CardScroller",
};
</script>

<style scoped>
.container {
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.container::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
</style>
