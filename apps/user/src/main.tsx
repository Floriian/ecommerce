import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { apolloConfig } from "@ecommerce/config";
import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./routes/base.router.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloConfig}>
      <Provider store={store}>
        <RouterProvider router={browserRouter} />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
