import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Signup from "@/pages/Signup.vue";
import Home from "@/pages/Home.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/Home", component: Home },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
