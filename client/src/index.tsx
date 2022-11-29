import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './components/App';
import {createRoot} from "react-dom/client";
import Home from "./views/Home";
import Options from "./views/options";
import NotFound from "./views/layouts/NotFound";

// Router Data
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: '/options',
        element: <Options />
    }
])

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
//root.render(<RouterProvider router={router} />)
