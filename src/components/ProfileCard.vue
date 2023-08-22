<template>
  <div>
    <div v-if="fetchComplete" class="bg-accent-dark -mx-4 flex flex-col items-center">
      <p class="text-white text-xl font-medium mt-8">Profile</p>
      <img
        class="w-[7rem] h-[7rem] rounded-full mt-5"
        src="../assets/images/profilePicture.svg"
        alt=""
      />
      <p class="text-white text-[22px] font-medium mt-3 pb-16">
        {{ displayName }}
      </p>
    </div>
    <div v-else class="bg-accent-dark -mx-4 flex flex-col items-center">
      <p class="text-white text-xl font-medium mt-8">Profile</p>
      <div class="w-[7rem] h-[7rem] rounded-full mt-5 bg-gray-300 animate-pulse"></div>
      <p class="text-white text-[22px] font-medium mt-3 pb-16 animate-pulse">Loading...</p>
    </div>
    <div class="bg-off-white rounded-t-full pb-10 -mt-10 -mx-4"></div>
    <div class="flex flex-col space-y-5 items-center">
      <button
        class="mt-4 h-12 w-80 bg-accent-dark font-medium text-white rounded-lg"
      >
        Change Information
      </button>
      <button
        class="mt-8 h-12 w-80 bg-accent-dark font-medium text-white rounded-lg"
      >
        Settings
      </button>
      <button
        class="mt-8 h-12 w-80 bg-accent-dark font-medium text-white rounded-lg"
      >
        Bug Report / Feature Request
      </button>
      <button
        class="mt-8 h-12 w-80 bg-accent-dark font-medium text-white rounded-lg"
      >
        GitHub Repo
      </button>
      <button
        @click="signOut"
        class="mt-10 h-12 w-80 bg-error-border font-medium text-white rounded-lg"
      >
        Sign Out
      </button>
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

  async beforeMount() {
      const { data, error } = await supabase
        .from("profiles")
        .select("display_name");
      if (error) {
        console.log(error);
      } else {
        this.displayName = data[0].display_name;
        this.fetchComplete = true;
      }
    },

  methods: {
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log(error);
      } else {
        router.push({ name: "Login" });
      }
    },
  },

  name: "ProfileCard",
};
</script>
