import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./App.tsx";
import EventLand from "./event-land/App.tsx";
import ShowLand from "./show-land/App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/event-land",
    element: <EventLand />,
  },
  {
    path: "/show-land",
    element: <ShowLand />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
