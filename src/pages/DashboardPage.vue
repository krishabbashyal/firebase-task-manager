<template>
  <div>
    <section-header class="mt-16 mb-1" />
    <card-scroller />
      <div class="flex flex-row justify-center items-center">
        <button
          @click="signOut"
          class="mt-10 h-14 w-80 bg-dark-gray font-medium text-white rounded-lg"
        >
          Sign Out
        </button>
      </div>
  </div>
</template>

<script>

import SectionHeader from "@/components/SectionHeader.vue";
import CardScroller from "@/components/CardScroller.vue";
import { supabase } from "../lib/supabaseClient.js";

export default {
  components: {
    SectionHeader,
    CardScroller,
  },
  methods: {
    async signOut() {
      const { error } = await supabase.auth.signOut();
      console.log(error)
      window.location.reload();
    },
  },
  name: "DashboardPage",
};
</script>
