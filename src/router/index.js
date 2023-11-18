import { createRouter, createWebHistory } from "vue-router";
import MainView from "../view/MainView";
import Login from "../view/LoginView";

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
        path: "/khach-hang/view/:userId",
        component: () => import("../components/contentView/UserView"),
      },

      {
        path: "sach",
        component: () => import("../components/ContentBook"),
      },
      {
        name: "bookView",
        path: "sach/view/:bookId",
        component: () => import("../components/contentView/BookView"),
      },

      {
        name: "edit",
        path: "sach/edit/:bookId",
        component: () => import("../components/form/BookForm"),
      },

      {
        path: "/danh-muc",
        component: () => import("../components/ContentCate"),
      },

      {
        path: "/danh-muc/edit/:cateId",
        component: () => import("../components/form/CateForm"),
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
        path: "/don-hang/view/:orderId",
        component: () => import("../components/contentView/OrderView"),
      },

      {
        path: "/yeu-cau",
        component: () => import("../components/ContentRequest"),
      },

      {
        path: "/thong-bao/view/:userId",
        component: () => import("../components/contentView/NotificationView"),
      },

      {
        path: "/nhan-vien",
        component: () => import("../components/ContentStaff"),
      },

      {
        path: "/nhan-vien/view/:staffId",
        component: () => import("../components/form/StaffInfoForm"),
      },
    ],
  },

  {
    path: "/login",
    component: Login,
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
