import { createRouter, createWebHistory } from "vue-router";
import MainView from "../view/MainView";

const routes = [
  {
    path: "/",
    component: MainView,
    children: [
      {
        path: "/so-lieu",
        component: () => import("../components/ContentData"),
      },

      {
        path: "/khach-hang",
        component: () => import("../components/ContentUser"),
      },

      {
        path: "/sach",
        component: () => import("../components/ContentBook"),
      },

      {
        path: "/danh-muc",
        component: () => import("../components/ContentCate"),
      },

      {
        path: "/gio-hang",
        component: () => import("../components/ContentCart"),
      },

      {
        path: "/don-hang",
        component: () => import("../components/ContentOrder"),
      },

      {
        path: "/thong-bao",
        component: () => import("../components/ContentNotification"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
export default router;
