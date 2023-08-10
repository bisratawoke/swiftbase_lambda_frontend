import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import "./index.css";
import FunctionsList from "./routes/FunctionsList.tsx";
import { fetchFunction, fetchFunctions } from "./api/http.ts";
import CreateFunction from "./routes/CreateFunction.tsx";
import ConfigureFunction from "./routes/ConfigureFunction.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        path: "/",
        index: true,
        element: <FunctionsList />,
        loader: async () => {
          try {
            const result = await fetchFunctions();
            return result;
          } catch (error) {
            console.log(error);
            return [];
          }
        },
      },
      {
        path: "/functions/create",
        element: <CreateFunction />,
      },
      {
        path: "/functions/config/:function_name",
        element: <ConfigureFunction />,
        loader: async ({ params }: any) => {
          try {
            const result = await fetchFunction(params.function_name);
            return result;
          } catch (error) {
            return [];
          }
        },
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
