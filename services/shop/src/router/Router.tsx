import { App } from "@/components/App";
import { LazyShop } from "@/pages/shop";
import { createBrowserRouter } from "react-router-dom";
import { UserCard } from "@packages/shared/src/components/UserCard";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop/main",
        element: <LazyShop />,
      },
      {
        path: "/shop/second",
        element: (
          <div style={{ color: "green" }}>
            <h1>second page</h1>
            <UserCard userName="FROM SHOP" />
          </div>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
