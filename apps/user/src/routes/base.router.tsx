import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Route } from "../types";
import { Layout } from "../components";
import ProductPage from "../pages/product/ProductPage";

export const routes: Route[] = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        children: [
          {
            path: ":id",
            element: <ProductPage />,
          },
        ],
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(routes);
