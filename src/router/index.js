import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import StatsView from "@/views/StatsView.vue";
import EditView from "@/views/EditView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/stats",
        name: "stats",
        component: StatsView,
    },
    {
        path: "/edit-note/:id",
        name: "editNote",
        component: EditView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;
