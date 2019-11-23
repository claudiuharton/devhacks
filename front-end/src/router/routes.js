const routes = [{
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/MainPage.vue")
    }]
  },
  {
    path: "/login",
    component: () => import("layouts/AuthLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/LoginPage.vue")
    }]
  },
  {
    path: "/display",
    component: () => import("layouts/DisplayLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/DisplayPage.vue")
    }]
  },
  {
    path: "/input",
    component: () => import("layouts/InputLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/InputPage.vue")
    }]
  },
  {
    path: "/employee",
    component: () => import("layouts/DisplayLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/EmployeePage.vue"),
    }]
  },
  {
    path: "/admin",
    component: () => import("layouts/DisplayLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/AdminPage.vue"),
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
