import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "flowbite";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import App from "./App.tsx";
import "./index.css";
import { persistor, store } from "./redux/store.ts";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SkeletonTheme baseColor="#fff" highlightColor="#f3f4f6">
              <HelmetProvider>
                <App />
              </HelmetProvider>
            </SkeletonTheme>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
