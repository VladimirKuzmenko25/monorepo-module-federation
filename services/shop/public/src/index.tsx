import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LazyAbout } from "@/pages/about";
import { LazyShop } from "@/pages/shop";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <LazyAbout />,
      },
      {
        path: "/shop",
        element: <LazyShop />,
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
