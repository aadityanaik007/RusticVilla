import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutUs from "./components/AboutUs/AboutUs";
import Stay from "./components/Stay/Stay";
import Photos from "./components/Photos/Photos";
import Packages from "./components/Packages/Packages";
import Reviews from "./components/Reviews/Reviews";
import ContactUs from "./components/ContactUs/ContactUs";
import Admin from "./components/Admin/Admin";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import { SiteContentProvider } from "./context/SiteContentContext";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/stay", element: <Stay /> },
  { path: "/gallery", element: <Photos /> },
  { path: "/packages", element: <Packages /> },
  { path: "/reviews", element: <Reviews /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/admin", element: <Admin /> },

  // Legacy paths kept as redirects so old links/bookmarks keep working
  { path: "/AboutUs", element: <Navigate to="/about" replace /> },
  { path: "/Services", element: <Navigate to="/stay" replace /> },
  { path: "/experiences", element: <Navigate to="/stay" replace /> },
  { path: "/Photos", element: <Navigate to="/gallery" replace /> },
  { path: "/ContactUs", element: <Navigate to="/contact" replace /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SiteContentProvider>
      <RouterProvider router={router} />
      <WhatsAppButton />
    </SiteContentProvider>
  </React.StrictMode>
);
