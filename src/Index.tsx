import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { store, StoreContext } from "./stores/Store";
import { authSchema } from "./utils/router/RouteSchema";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={authSchema} />
            </QueryClientProvider>
        </StoreContext.Provider>
    </React.StrictMode>
);
