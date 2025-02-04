import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./shared/reset.css";

import MainPage from "./App.tsx";
import EventLand from "./event-land/App.tsx";
import ShowLand from "./show-land/App.tsx";
import SolarLand from "./solar-land/App.tsx";
import Productdetails from "./product-details/App.tsx";
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
  {
    path: "/solar-land",
    element: <SolarLand />,
  },
  {
    path: "/product-details",
    element: <Productdetails />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
