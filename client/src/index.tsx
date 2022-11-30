import React from "react";
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import {createRoot} from "react-dom/client";
import Home from "./views/Home";
import Options from "./views/options";
import ErrorPage from "./views/layouts/ErrorPage";
import App from "./App";
import OptionsRedux from "./views/options/redux";
import {Provider} from "react-redux";
import {store, storeLegacy} from "./redux/store"
import OptionsRedux2 from "./views/options/redux2";
import OptionDetail from "./views/options/detail/OptionDetail";
import {getOptions} from "./utils/loaders";
import RouterApp from "./RouterApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// root.render(<App />)
/*root.render(<Provider store={storeLegacy}>
    <App/>
</Provider>)*/
//root.render(<RouterProvider router={router} />);
root.render(<RouterApp />);
