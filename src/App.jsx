import { createHashRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { ViewEmployees } from "./pages/ViewEmployees";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/employee-list",
        element: <ViewEmployees />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
