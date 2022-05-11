import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";

import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppContacts from "./views/AppContacts.vue";

const routes = [
    {
        path: "/",
        component: AppHome,
    },
    {
        path: "/about",
        component: AppAbout,
    },
    {
        path: "/contacts",
        component: AppContacts,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App)
.use(router)
.mount('#app')
