
import React, {createContext, useState} from 'react';
import '../css/styles.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/Home";
import Options from "../views/options";
import NotFound from "../views/layouts/NotFound";
import AppContext from "../contexts/AppContext";
import OptionDetail from "../views/options/OptionDetail";
import OptionsRedux from "../views/options/redux";
import {Provider} from "react-redux";

// Router UI
const App = () => {
    const [defaultValue, setDefaultValue] = useState<string>('Order');
    const [options, setOptions] = useState<string[]>([]);

    return (
        <>
            <AppContext.Provider value={{
                defaultValue, setDefaultValue,
                options, setOptions
            }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {
                            //<Route path="options" element={<Options />} />
                        }
                        <Route path="options" element={<OptionsRedux />} />
                        <Route path="options/:id" element={<OptionDetail />} />
                    </Routes>
                </BrowserRouter>
            </AppContext.Provider>
        </>
    )
}

export default App
