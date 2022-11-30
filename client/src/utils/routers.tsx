import {createBrowserRouter} from "react-router-dom";
import {getOptions} from "./loaders";
import Home from "../views/Home";
import ErrorPage from "../views/layouts/ErrorPage";
import Options from "../views/options";
import React from "react";

export const router = createBrowserRouter([
    {
        path: '/',
        index: true,
        loader: getOptions,
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: 'options',
        element: <Options />,
    },
])
