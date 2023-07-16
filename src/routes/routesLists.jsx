// import { lazyLoad } from "../helpers/lazyLoad";
import { lazy } from "react";
export const publicRoutes = [
  // { path: "/", element: lazyLoad("../pages/home/index.jsx") },
  { path: "/", element: lazy(() => import("../pages/home/index.jsx")) },
  { path: "/ar", element: lazy(() => import("../pages/home/index.jsx")) },
  { path: "/fa", element: lazy(() => import("../pages/home/index.jsx")) },
  {
    path: "/thankyou",
    element: lazy(() => import("../pages/home/thankyou.jsx")),
  },
];

export const protectedRoutes = [];
