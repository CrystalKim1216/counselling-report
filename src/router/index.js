import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentsView from "../views/StudentsView.vue";
import CounsellingView from "../views/CounsellingView.vue";
import NotFound from "../NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/students",
      name: "students",
      component: StudentsView,
    },
    {
      path: "/student/add",
      name: "student.add",
      component: () => import("../components/student/StudentAdd.vue"),
    },
    {
      path: "/student/edit/:id",
      name: "student.edit",
      props: true,
      component: () => import("../components/student/StudentEdit.vue"),
    },
    {
      path: "/counselling",
      name: "counselling",
      component: CounsellingView,
    },
    {
      path: "/counselling/:date",
      props: true,
      children: [
        {
          path: "detail",
          name: "counselling.day.detail",
          component: () =>
            import("../components/counselling/CounsellingDayDetail.vue"),
        },
        {
          path: "add",
          name: "counselling.day.add",
          component: () =>
            import("../components/counselling/CounsellingDayAdd.vue"),
        },
      ],
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
