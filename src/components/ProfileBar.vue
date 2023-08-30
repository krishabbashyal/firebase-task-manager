<template>
  <div>
    <div v-if="fetchComplete" class="mt-14 flex justify-between">
      <div>
        <p class="font-medium text-xl">Hey, {{ displayName }} 👋</p>
        <p class="-mt-0.5 text-[#666666]">Let’s have a productive day.</p>
      </div>
      <div>
        <button @click="profileClicked" type="button" class="inline-flex flex-col items-center justify-center">
          <img class="w-[3.125rem] h-[3.125rem] rounded-full" src="../assets/images/profilePicture.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from "@/lib/supabaseClient";
import router from "@/main";

export default {
  data() {
    return {
      displayName: "",
      fetchComplete: false,
    };
  },
  methods: {
    profileClicked() {
      router.push({ name: "Profile" });
    },
  },

  async beforeMount() {
    const { data, error } = await supabase.from("profiles").select("display_name");
    if (error) {
      console.log(error);
    } else {
      this.displayName = data[0].display_name;
      this.fetchComplete = true;
    }
  },

  name: "ProfileBar",
};
</script>
