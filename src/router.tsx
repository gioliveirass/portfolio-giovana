import { createBrowserRouter } from "react-router";

import MainLayout from "./shared/layouts/main-layout";
import Homepage from "./pages/homepage";
import Error from "./pages/error";

export const appPaths = {
  homepage: "/",
};

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        path: appPaths.homepage,
        element: <MainLayout />,
        children: [{ index: true, Component: Homepage }],
      },
    ],
  },
]);

export default router;
