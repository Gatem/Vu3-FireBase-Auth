const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "home", component: () => import("pages/IndexPage.vue") },

      {
        path: "/join",
        component: () => import("src/modules/Auth/layout/index.vue"),
        children: [
          {
            path: "",
            component: () => import("src/modules/Auth/pages/registration.vue"),
          },
          {
            path: "login",
            component: () => import("src/modules/Auth/pages/login.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
