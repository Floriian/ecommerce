import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { apolloConfig } from "@ecommerce/config";
import { Layout } from "./components/layout/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloConfig}>
      <Layout>
        <App />
      </Layout>
    </ApolloProvider>
  </React.StrictMode>
);
