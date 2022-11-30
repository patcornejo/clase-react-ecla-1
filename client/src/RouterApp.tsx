/*export default class App extends React.Component {
    render() {
        return <div></div>
    }
}

export default function App () {

}*/
import React, {useState} from 'react';
import './css/styles.scss';
import Home from "./views/Home";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Options from "./views/options";
import ErrorPage from "./views/layouts/ErrorPage";
import OptionDetail from "./views/options/detail/OptionDetail";
import AppContext from './contexts/AppContext';
import OptionsRedux from "./views/options/redux";
import {getOptions} from "./utils/loaders";
import {router} from "./utils/routers";

const RouterApp: React.FunctionComponent = () => {
    const [defaultValue, setDefaultValue] = useState<string>('Each Word');
    const [options, setOptions] = useState<string[] | undefined>(undefined);

    return (
        <AppContext.Provider value={{
            defaultValue, setDefaultValue,
            options, setOptions
        }}>
            <RouterProvider router={router} />
        </AppContext.Provider>
    )
}

export default RouterApp
