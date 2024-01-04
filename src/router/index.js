// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Home.vue"),
        meta: {
          imagePath: "/path/to/image.jpg",
        },
      },
      {
        path: "/category",
        name: "Category",
        component: () => import("@/views/Category.vue"),
      },
      {
        path: "/checkout",
        name: "Checkout",
        component: () => import("@/views/CheckOut.vue"),
      },
      {
        path: "/wishlist",
        name: "Wishlist",
        component: () => import("@/views/Wishlist.vue"),
      },
      {
        path: "/product/:productId",
        name: "Product",
        props: true,
        component: () => import("@/views/ProductView.vue"),
      },
      {
        path: "/search",
        name: "Search",
        component: () => import("@/views/Search.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
