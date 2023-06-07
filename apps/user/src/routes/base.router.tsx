import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Route } from "../types";
import { Layout } from "../components";
import ProductPage from "../pages/product/ProductPage";
import Cart from "../pages/cart/Cart";

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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(routes);
