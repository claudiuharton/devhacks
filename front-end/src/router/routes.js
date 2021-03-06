const routes = [{
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/AdminPage.vue")
    }]
  },
  {
    path: "/display",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/DisplayPage.vue")
    }]
  },
  {
    path: "/input",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/InputPage.vue")
    }]
  },
  {
    path: "/employee",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/EmployeePage.vue"),
    }]
  },
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/AdminPage.vue"),
    }]
  },
  {
    path: "/test",
    component: () => import("layouts/DisplayLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/TestChart.vue"),
    }]
  },

];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
