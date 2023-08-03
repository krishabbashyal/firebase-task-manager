<template>
  <ul>
    <li v-for="status in supabaseStatus" :key="status.id">Supabase: {{ status.status }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "./lib/supabaseClient";

const supabaseStatus = ref([]);

async function checkStatus() {
  const { data } = await supabase.from("supabaseStatus").select();
  supabaseStatus.value = data;
}

onMounted(() => {
   checkStatus();
});
</script>
