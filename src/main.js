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

async function isLoggedIn() {
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    return true;
  } else {
    return false;
  }
}

router.beforeEach(async (to, from, next) => {
  if (to.meta.authRequired && !(await isLoggedIn())) {
    next("/login");
  } else {
    next();
  }
});


/* eslint-enable no-unused-vars */

app.use(router);
app.mount("#app");
