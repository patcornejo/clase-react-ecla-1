import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './components/App';
import {createRoot} from "react-dom/client";
import Home from "./views/Home";
import Options from "./views/options";
import NotFound from "./views/layouts/NotFound";
import OptionDetail from "./views/options/OptionDetail";
import {Provider} from "react-redux";
import {store, storeLegacy} from "./redux/store";

// Router Data
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: 'options',
        element: <Options />,
        /*children: [
            {
                path: ':id', // options/:id
                element: <OptionDetail />
            }
        ]*/
    },
    {
        path: 'options/:id',
        element: <OptionDetail />
    }
])

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
// root.render(<App />);
// root.render(<RouterProvider router={router} />)
