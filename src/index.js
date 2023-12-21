import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from "./components/AboutUs/AboutUs"
import ContactUs from "./components/ContactUs/ContactUs"
import Photos from "./components/Photos/Photos"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>{<App/>}</div>,
  },
  {
    path: "/AboutUs",
    element: <div>{<AboutUs/>}</div>,
  },
  {
    path: "/ContactUs",
    element: <div>{<ContactUs/>}</div>,
  },
  {
    path: "/Photos",
    element: <div>{<Photos/>}</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
