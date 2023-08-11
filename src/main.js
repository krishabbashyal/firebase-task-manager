import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./index.css";

import { supabase } from "./lib/supabaseClient";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Landing Page",
      component: () => import("./pages/DashboardPage"),
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./pages/LoginPage"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("./pages/RegisterPage"),
      meta: {
        authRequired: false,
      },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("./pages/DashboardPage"),
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/component-workspace",
      name: "Workspace",
      component: () => import("./pages/WorkspacePage"),
      meta: {
        authRequired: false,
      },
    },
  ],
});

/* eslint-disable no-unused-vars */

// move to another section eventually as this is likely something that will be used often, maybe it can live in /lib with all of the other supabase things
async function checkAuthentication() {
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    return true;
  } else {
    return false;
  }
}

router.beforeEach(async (to, from, next) => {
  const isLoggedIn = await checkAuthentication()
  if (to.meta.authRequired && !isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});


/* eslint-enable no-unused-vars */

app.use(router);
app.mount("#app");

export default router
