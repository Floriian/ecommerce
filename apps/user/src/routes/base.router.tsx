import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Route } from "../types";
import { Layout } from "../components";

export const routes: Route[] = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(routes);
